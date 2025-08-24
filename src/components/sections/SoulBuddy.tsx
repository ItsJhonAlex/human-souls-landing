import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Globe, BookOpen, Network, Trophy, Heart, Send } from "lucide-react";

const SoulBuddy = () => {
  const benefits = [
    {
      icon: Globe,
      text: "Visibilidad global dentro de la red"
    },
    {
      icon: BookOpen,
      text: "Oportunidad de ofrecer cursos, cápsulas y mentorías"
    },
    {
      icon: Network,
      text: "Formar parte de un ecosistema innovador con propósito"
    },
    {
      icon: Trophy,
      text: "Reconocimiento simbólico y puntos de crecimiento"
    },
    {
      icon: Heart,
      text: "Acompañamiento del equipo central para crear experiencias memorables"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Quieres ser parte del equipo de Soul Buddies?
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Comparte tu talento y acompaña a otros en su camino de transformación.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <div className="mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  En Human Souls creemos que el conocimiento se multiplica cuando se comparte.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Ser Soul Buddy no es solo dar un curso: es <strong>jugar, crear, acompañar y transformar</strong> junto a una comunidad que vibra contigo.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Aquí vas a <strong>conectar con personas de todo el mundo</strong>, a compartir tu esencia y a convertir tus talentos en experiencias que inspiran.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Tu voz, tus ideas y tu forma única de enseñar pueden abrir caminos y despertar sonrisas. 💡🌍
                </p>
                <p className="text-lg font-semibold text-center">
                  Juntos, hacemos que aprender sea una aventura divertida, humana y transformadora.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-xl mb-4">Beneficios de ser Soul Buddy</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <benefit.icon className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-xl mb-4">Formulario de Postulación</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <Label htmlFor="apellido">Apellido</Label>
                        <Input id="apellido" placeholder="Tu apellido" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email de contacto</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="ubicacion">País / Ciudad</Label>
                      <Input id="ubicacion" placeholder="Tu ubicación" />
                    </div>
                    <div>
                      <Label htmlFor="especialidad">Especialidad</Label>
                      <Input id="especialidad" placeholder="Tu área de experiencia" />
                    </div>
                    <div>
                      <Label htmlFor="propuesta">Propuesta de valor</Label>
                      <Textarea 
                        id="propuesta" 
                        placeholder="¿Qué quieres aportar a Human Souls?"
                        rows={4}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar mi postulación
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SoulBuddy;
