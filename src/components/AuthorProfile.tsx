import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Globe, Linkedin, Twitter, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface AuthorProfileProps {
  variant?: "compact" | "full";
  showSocialLinks?: boolean;
}

const AuthorProfile = ({ variant = "compact", showSocialLinks = true }: AuthorProfileProps) => {
  const [isExpanded, setIsExpanded] = useState(variant === "full");

  const author = {
    name: "Daniel Olimpio",
    role: "Desenvolvedor Web",
    avatar: "/images/author/daniel-olimpio.jpg",
    shortBio: "Combinando tecnologia inovadora e criatividade estratégica, desenvolvemos soluções digitais de alto impacto — apoiadas por uma equipe jurídica especializada que garante qualidade, precisão e conformidade em todos os artigos e conteúdos produzidos.",
    fullBio: "Com mais de 20 anos de atuação no mercado digital, sou especializado em desenvolvimento web e design de interfaces, unindo performance, usabilidade e identidade visual em cada projeto.\n\nMinha expertise está em transformar ideias complexas em soluções digitais funcionais, escaláveis e visualmente marcantes. Trabalho com foco na harmonia entre código limpo, arquitetura eficiente e design responsivo, sempre priorizando a experiência do usuário e os objetivos do negócio.\n\nDo front-end moderno ao back-end robusto, da prototipagem à entrega final, meu compromisso é construir produtos digitais que unem forma, função e tecnologia.",
    skills: ["Full Stack Development", "UI/UX Design", "Brand Identity"],
    website: "danielolimpio.com",
    social: {
      linkedin: "https://linkedin.com/in/danielolimpio",
      twitter: "https://twitter.com/danielolimpio",
      github: "https://github.com/danielolimpio"
    }
  };

  return (
    <Card className="bg-gradient-to-br from-muted/30 to-background border-border/40">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="w-20 h-20 border-2 border-primary/20">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
              {author.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{author.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{author.role}</p>
            
            {showSocialLinks && (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                >
                  <a href={`https://${author.website}`} target="_blank" rel="noopener noreferrer" aria-label="Website">
                    <Globe className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                >
                  <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                >
                  <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                >
                  <a href={author.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Sobre Mim</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {author.shortBio}
          </p>
        </div>

        {isExpanded && variant === "compact" && (
          <>
            <Separator />
            <div>
              <h4 className="text-sm font-semibold mb-2">Minha Jornada</h4>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                {author.fullBio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <div className="flex flex-wrap gap-2">
                {author.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {variant === "full" && (
          <>
            <Separator />
            <div>
              <h4 className="text-sm font-semibold mb-2">Minha Jornada</h4>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                {author.fullBio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <div className="flex flex-wrap gap-2">
                {author.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {variant === "compact" && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full"
          >
            {isExpanded ? (
              <>
                Ver menos <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Ver descrição completa <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default AuthorProfile;
