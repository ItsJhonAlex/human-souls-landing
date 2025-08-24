import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      emoji: "✨",
      name: "María G.",
      location: "Argentina",
      testimonial: "Entrar a Human Souls me hizo sentir parte de algo más grande. Aquí encontré personas con las que puedo crecer y crear proyectos reales."
    },
    {
      emoji: "🌍",
      name: "Andrés P.",
      location: "Colombia",
      testimonial: "Lo que más me sorprendió es la combinación entre aprendizaje práctico y conexión humana. No es solo teoría, es vivirlo."
    },
    {
      emoji: "💡",
      name: "Laura M.",
      location: "España",
      testimonial: "Las cápsulas son increíbles: en pocos minutos aprendo algo nuevo y lo aplico en mi vida. ¡Es práctico y motivador!"
    },
    {
      emoji: "🤝",
      name: "Carlos R.",
      location: "México",
      testimonial: "Human Souls me devolvió la motivación para compartir mis talentos. Aquí siento que mi aporte cuenta y suma al mundo."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Historias que inspiran
          </h2>
          <p className="text-xl text-muted-foreground">
            Lo que sienten quienes ya son parte de Human Souls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.emoji}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
