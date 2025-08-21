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
import { useToast } from '@/hooks/use-toast';
import { Download, FileText, ArrowLeft } from 'lucide-react';

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
        <div className="mb-6 flex items-center gap-4">
          <Button variant="outline" onClick={() => setGeneratedContract('')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Formulário
          </Button>
          <Button onClick={handleDownloadPDF} className="bg-google-blue hover:bg-google-blue-dark">
            <Download className="mr-2 h-4 w-4" />
            Baixar PDF
          </Button>
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
                className="w-full bg-google-blue hover:bg-google-blue-dark"
                disabled={isGenerating}
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