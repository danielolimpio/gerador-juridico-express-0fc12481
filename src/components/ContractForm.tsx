import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ContractType, FormField as ContractFormField } from '@/lib/contractTypes';
import { validateCPF, validateCNPJ, formatCPF, formatCNPJ, formatCurrency } from '@/lib/validation';
import { generateContractText } from '@/lib/contractTemplates';
import { generatePDF } from '@/lib/pdfGenerator';
import { generateWord } from '@/lib/wordGenerator';
import { generateTxt } from '@/lib/txtGenerator';
import { useToast } from '@/hooks/use-toast';
import { Download, FileText, ArrowLeft, Share2, FileType } from 'lucide-react';

interface ContractFormProps {
  contractType: ContractType;
  onBack: () => void;
}

const ContractForm: React.FC<ContractFormProps> = ({ contractType, onBack }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContract, setGeneratedContract] = useState<string>('');
  const { toast } = useToast();

  // Create dynamic schema based on contract fields
  const createSchema = () => {
    const schemaFields: { [key: string]: z.ZodTypeAny } = {};
    
    contractType.fields.forEach((field) => {
      if (field.type === 'number') {
        let fieldSchema = z.coerce.number();
        if (field.validation?.min !== undefined) {
          fieldSchema = fieldSchema.min(field.validation.min);
        }
        if (field.validation?.max !== undefined) {
          fieldSchema = fieldSchema.max(field.validation.max);
        }
        schemaFields[field.name] = field.required ? fieldSchema : fieldSchema.optional();
      } else {
        let fieldSchema: z.ZodString | z.ZodOptional<z.ZodString> = z.string();
        
        if (field.required) {
          fieldSchema = fieldSchema.min(1, `${field.label} é obrigatório`);
          
          if (field.type === 'email') {
            fieldSchema = fieldSchema.email('E-mail inválido');
          }
          
          if (field.type === 'cpf') {
            fieldSchema = fieldSchema.refine((val: string) => validateCPF(val), {
              message: 'CPF inválido'
            });
          } else if (field.type === 'cnpj') {
            fieldSchema = fieldSchema.refine((val: string) => validateCNPJ(val), {
              message: 'CNPJ inválido'
            });
          }
        } else {
          fieldSchema = fieldSchema.optional();
          
          if (field.type === 'cpf') {
            fieldSchema = fieldSchema.refine((val) => !val || validateCPF(val), {
              message: 'CPF inválido'
            });
          } else if (field.type === 'cnpj') {
            fieldSchema = fieldSchema.refine((val) => !val || validateCNPJ(val), {
              message: 'CNPJ inválido'
            });
          }
        }
        
        schemaFields[field.name] = fieldSchema;
      }
    });
    
    return z.object(schemaFields);
  };

  const form = useForm({
    resolver: zodResolver(createSchema()),
    defaultValues: contractType.fields.reduce((acc, field) => {
      acc[field.name] = field.type === 'number' ? 0 : '';
      return acc;
    }, {} as { [key: string]: string | number })
  });

  const onSubmit = (data: any) => {
    try {
      setIsGenerating(true);
      const contractText = generateContractText(contractType.id, data);
      setGeneratedContract(contractText);
      
      toast({
        title: "Contrato gerado com sucesso!",
        description: "Seu contrato foi gerado e está pronto para download.",
      });
    } catch (error) {
      toast({
        title: "Erro ao gerar contrato",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPDF = () => {
    if (generatedContract) {
      generatePDF(generatedContract, contractType.title);
      toast({
        title: "Download iniciado!",
        description: "O arquivo PDF está sendo baixado.",
      });
    }
  };

  const handleDownloadWord = async () => {
    if (generatedContract) {
      try {
        await generateWord(generatedContract, contractType.title);
        toast({
          title: "Download iniciado!",
          description: "O arquivo Word está sendo baixado.",
        });
      } catch (error) {
        toast({
          title: "Erro ao gerar Word",
          description: "Ocorreu um erro. Tente novamente.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDownloadTxt = () => {
    if (generatedContract) {
      generateTxt(generatedContract, contractType.title);
      toast({
        title: "Download iniciado!",
        description: "O arquivo TXT está sendo baixado.",
      });
    }
  };

  const handleShare = (platform: string) => {
    const text = `Acabo de gerar meu ${contractType.title} em segundos! Confira esta ferramenta incrível:`;
    const url = window.location.origin;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const formatInputValue = (field: ContractFormField, value: string) => {
    switch (field.type) {
      case 'cpf':
        return formatCPF(value);
      case 'cnpj':
        return formatCNPJ(value);
      case 'currency':
        return formatCurrency(value);
      default:
        return value;
    }
  };

  const renderField = (field: ContractFormField) => (
    <FormField
      key={field.name}
      control={form.control}
      name={field.name}
      render={({ field: formField }) => (
        <FormItem>
          <FormLabel>{field.label}</FormLabel>
          <FormControl>
            {field.type === 'select' ? (
              <Select onValueChange={formField.onChange} defaultValue={formField.value as string}>
                <SelectTrigger>
                  <SelectValue placeholder={field.placeholder || `Selecione ${field.label.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : field.type === 'textarea' ? (
              <Textarea
                placeholder={field.placeholder}
                {...formField}
                value={formField.value as string}
                className="min-h-[100px]"
              />
            ) : (
              <Input
                type={field.type === 'cpf' || field.type === 'cnpj' || field.type === 'currency' ? 'text' : field.type}
                placeholder={field.placeholder}
                {...formField}
                value={formField.value as string}
                onChange={(e) => {
                  const formatted = formatInputValue(field, e.target.value);
                  formField.onChange(formatted);
                }}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  if (generatedContract) {
    return (
      <div className="container mx-auto max-w-4xl p-4">
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button variant="outline" onClick={() => setGeneratedContract('')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Formulário
          </Button>
          
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleDownloadPDF} className="bg-primary hover:bg-primary-hover">
              <Download className="mr-2 h-4 w-4" />
              PDF
            </Button>
            <Button onClick={handleDownloadWord} variant="outline">
              <FileType className="mr-2 h-4 w-4" />
              Word
            </Button>
            <Button onClick={handleDownloadTxt} variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              TXT
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Compartilhar:</span>
            <Button size="sm" variant="ghost" onClick={() => handleShare('whatsapp')} className="p-2 hover:bg-green-50 hover:text-green-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
            </Button>
            <Button size="sm" variant="ghost" onClick={() => handleShare('facebook')} className="p-2 hover:bg-blue-50 hover:text-blue-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Button>
            <Button size="sm" variant="ghost" onClick={() => handleShare('twitter')} className="p-2 hover:bg-sky-50 hover:text-sky-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Button>
            <Button size="sm" variant="ghost" onClick={() => handleShare('linkedin')} className="p-2 hover:bg-blue-50 hover:text-blue-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {contractType.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed bg-muted p-4 rounded-lg">
              {generatedContract}
            </pre>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Documento gerado automaticamente por{' '}
                <a 
                  href="https://modelodecontrato.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  https://modelodecontrato.org
                </a>
                {' '}- Confira todos os dados antes de assinar
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <div className="mb-6">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{contractType.title}</CardTitle>
          <p className="text-muted-foreground">{contractType.description}</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4">
                {contractType.fields.map(renderField)}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                disabled={isGenerating || !form.formState.isValid}
              >
                {isGenerating ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    Gerando Contrato...
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-4 w-4" />
                    Gerar Contrato
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContractForm;