import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contato = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem alguma dúvida ou sugestão? Entre em contato conosco. 
            Estamos aqui para ajudar você com seus contratos jurídicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulário de Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Enviar Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome completo" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" placeholder="Assunto da sua mensagem" />
              </div>
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  rows={5}
                  placeholder="Descreva sua dúvida, sugestão ou problema..."
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-muted-foreground">contato@modelosdecontratos.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(12) 98251-9116</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">João Pessoa, Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Horário de Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta</span>
                    <span className="text-muted-foreground">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="text-muted-foreground">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dúvidas Rápidas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Consulte nossa seção de perguntas frequentes para respostas imediatas.
                </p>
                <Button variant="outline" onClick={() => navigate('/faq')}>
                  Ver FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;