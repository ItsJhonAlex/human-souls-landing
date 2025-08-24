import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Heart, Users, Zap, Globe, Sparkles, BookOpen, Target, Lightbulb, Palette, Shield, Hand, UserCheck, Calendar, Trophy, Network, Quote, Send, Play, Camera, User, Gamepad2, Handshake, Flame, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-character.jpg";
import capsulesImage from "@/assets/learning-capsules.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative gradient-hero min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Únete a la primera
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent"> red social </span>
              de transformación humana
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Descubre cómo, al crecer y aprender en comunidad, creamos un mundo de infinitas posibilidades. 
              Lo digital y lo humano se fusionan para que descubras tus talentos y te conviertas en un agente de cambio real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Empieza tu viaje
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <p className="text-white/70 text-sm">
              ✨ Ya somos una comunidad global en crecimiento
            </p>
          </div>
          
          <div className="relative">
            <div className="animate-float">
              <img 
                src={heroImage} 
                alt="Human Souls Character" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cápsulas Human Souls */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Cápsulas de Aprendizaje
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Crece, conéctate e inspira
            </p>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed">
              Pequeños espacios de formación y conexión que transforman tu forma de aprender, compartir y vivir. 
              Experiencias breves, creativas y dinámicas que puedes disfrutar estés donde estés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={capsulesImage} 
                alt="Cápsulas de Aprendizaje" 
                className="w-full rounded-3xl shadow-card"
              />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  30-45 minutos • 100% online y en vivo
                </Badge>
                
                <p className="text-lg leading-relaxed">
                  Las Cápsulas de Aprendizaje son encuentros interactivos, diseñados para que adquieras nuevas herramientas 
                  y amplíes tu visión en pocos minutos, con un enfoque integral que une lo profesional, lo creativo y lo humano.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Aprende en poco tiempo, sin saturarte</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Conéctate con personas que comparten tus intereses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Accede a perspectivas globales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Aplica lo aprendido de forma inmediata</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="cta" size="lg">
                Descubre las próximas cápsulas
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <Palette className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cápsulas Creativas</h3>
                <p className="text-sm text-muted-foreground">
                  Despierta tu imaginación y potencia tu capacidad de innovar
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cápsulas de Impacto</h3>
                <p className="text-sm text-muted-foreground">
                  Proyectos colaborativos para generar cambios reales
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cápsulas Vitales</h3>
                <p className="text-sm text-muted-foreground">
                  Fortalece tu bienestar físico, mental y emocional
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cápsulas de Conexión</h3>
                <p className="text-sm text-muted-foreground">
                  Construye vínculos auténticos que trasciendan fronteras
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rutas de Aprendizaje */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Rutas de Aprendizaje
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Tu camino, paso a paso
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Avanza desde lo básico hasta el nivel experto con itinerarios claros y motivadores. 
              Recorridos temáticos que combinan cursos, cápsulas y prácticas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="shadow-card hover:scale-105 transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Ruta de Descubrimiento</h3>
                <p className="text-muted-foreground text-sm">
                  Para quienes dan sus primeros pasos en su transformación personal
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:scale-105 transition-all duration-300 border-2 border-secondary/20">
              <CardContent className="p-6">
                <Lightbulb className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-bold text-lg mb-2">Creatividad Aplicada</h3>
                <p className="text-muted-foreground text-sm">
                  Transforma ideas en proyectos reales con impacto
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:scale-105 transition-all duration-300 border-2 border-accent/20">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">Conexión y Liderazgo</h3>
                <p className="text-muted-foreground text-sm">
                  Mejora tus habilidades sociales y de liderazgo humano
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:scale-105 transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-6">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Bienestar Integral</h3>
                <p className="text-muted-foreground text-sm">
                  Hábitos y herramientas para potenciar tu energía vital
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="gradient" size="lg">
              Explorar todas las rutas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Beneficios de Unirte a Human Souls
            </h2>
            <p className="text-xl text-muted-foreground">
              Conecta, crece y transforma tu mundo junto a personas que comparten tu visión
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Users,
                title: "Conexiones Reales y Significativas",
                description: "Únete a personas auténticas que comparten tus valores y objetivos"
              },
              {
                icon: BookOpen,
                title: "Aprendizaje Continuo",
                description: "Accede a cápsulas creativas, rutas de aprendizaje y experiencias que potencian tus talentos"
              },
              {
                icon: Target,
                title: "Acción con Propósito",
                description: "Convierte tus ideas en proyectos reales con impacto positivo"
              },
              {
                icon: Globe,
                title: "Oportunidades Globales",
                description: "Colabora con miembros y mentores de diferentes países"
              },
              {
                icon: Sparkles,
                title: "Inspiración Constante",
                description: "Participa en actividades que nutren tu creatividad y motivación"
              },
              {
                icon: Heart,
                title: "Comunidad Viva y Apoyo Mutuo",
                description: "Crece acompañado de personas que te impulsan a dar tu mejor versión"
              }
            ].map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              Forma parte del movimiento que transforma vidas
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-20 px-4 gradient-primary">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Empieza tu viaje hoy
            </h2>
            <p className="text-xl text-white/90">
              No te quedes fuera de la primera red social de transformación humana. 
              Conecta, aprende y convierte tu propósito en acción junto a una comunidad global.
            </p>
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Únete ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-white/70 text-sm">
              Ya somos una comunidad global en crecimiento
            </p>
          </div>
        </div>
      </section>

      {/* Ecosistema Human Souls */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Nuestro Ecosistema Vivo
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Un espacio donde lo digital y lo humano se encuentran para crear impacto real.
            </p>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed">
              El ecosistema de Human Souls integra personas, herramientas y experiencias en un mismo lugar. 
              Es un entorno diseñado para que cada miembro pueda <strong>descubrirse, aprender, conectar y transformar</strong>. 
              Aquí todo está interconectado: perfiles, cápsulas de aprendizaje, rutas, comunidad y proyectos con impacto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: User,
                title: "Perfiles Vivos",
                description: "Cada persona cuenta con un perfil dinámico, un muro personal y acceso a su propia isla de energía."
              },
              {
                icon: UserCheck,
                title: "Soul Buddies (Mentores)",
                description: "Guías y facilitadores que acompañan con cursos, sesiones y proyectos de impacto."
              },
              {
                icon: Play,
                title: "Cápsulas de Aprendizaje",
                description: "Micro-experiencias prácticas y creativas para aprender, reflexionar y crecer en comunidad."
              },
              {
                icon: BookOpen,
                title: "Rutas de Transformación",
                description: "Itinerarios de aprendizaje diseñados para profundizar en áreas clave de la vida y el propósito."
              },
              {
                icon: Gamepad2,
                title: "Gamificación con Propósito",
                description: "Misiones, insignias y logros que hacen del crecimiento una experiencia divertida y motivadora."
              },
              {
                icon: Users,
                title: "Proyectos Colaborativos",
                description: "Espacios donde las ideas se convierten en acciones concretas que transforman realidades."
              },
              {
                icon: Calendar,
                title: "Agenda Sesiones",
                description: "Disponibilidad de mentores, sesiones en vivo y actividades comunitarias para mantenerte en movimiento."
              },
              {
                icon: Target,
                title: "Agenda Viva 2030",
                description: "Nuestra hoja de ruta hacia un mundo más consciente, creativo y colaborativo."
              }
            ].map((element, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0 group">
                <CardContent className="p-6 text-center">
                  <element.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg mb-3">{element.title}</h3>
                  <p className="text-muted-foreground text-sm">{element.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo de Trabajo */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              El equipo detrás de Human Souls
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Una visión compartida que une talento, propósito y acción.
            </p>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed">
              Somos un equipo multidisciplinario apasionado por transformar la manera en que las personas aprenden, 
              se conectan y generan impacto. Cada uno aporta su esencia y experiencia para hacer de Human Souls 
              una comunidad viva y global.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "👩‍💼",
                name: "Daiana Ramírez",
                role: "CEO & Fundadora",
                description: "Visión estratégica, diseño de la experiencia, alianzas y dirección creativa."
              },
              {
                emoji: "👨‍💼",
                name: "Leonardo",
                role: "Socio Primario y Experiencia de Usuario",
                description: "Diseña dinámicas de interacción y asegura que la comunidad se sienta viva."
              },
              {
                emoji: "👨‍💻",
                name: "Orlando",
                role: "Desarrollo de la App",
                description: "Responsable de la arquitectura técnica y funcionamiento de la plataforma."
              },
              {
                emoji: "👨‍💻",
                name: "Jonatan",
                role: "Arquitectura de Landing",
                description: "Arquitectura de la landing page y funcionalidad."
              },
              {
                emoji: "🎨",
                name: "Juan",
                role: "Identidad Visual",
                description: "Diseño gráfico e identidad visual que transmiten el alma de la comunidad."
              }
            ].map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.emoji}</div>
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
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
            {[
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
            ].map((testimonial, index) => (
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

      {/* Postúlate como Soul Buddy */}
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
                      <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Visibilidad global dentro de la red</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Oportunidad de ofrecer cursos, cápsulas y mentorías</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Network className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Formar parte de un ecosistema innovador con propósito</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Trophy className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Reconocimiento simbólico y puntos de crecimiento</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">Acompañamiento del equipo central para crear experiencias memorables</span>
                      </li>
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

      {/* Valores y Principios */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground">
              Human Souls se sostiene sobre pilares que inspiran y guían cada experiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Handshake,
                emoji: "🤝",
                title: "Conexión Humana",
                description: "Donde cada encuentro es auténtico y significativo."
              },
              {
                icon: Flame,
                emoji: "🔥",
                title: "Propósito Vivo",
                description: "Todo lo que hacemos nace de un 'para qué' más grande."
              },
              {
                icon: Rocket,
                emoji: "🚀",
                title: "Acción Real",
                description: "Convertimos la inspiración en proyectos con impacto concreto."
              },
              {
                icon: Palette,
                emoji: "🎨",
                title: "Creatividad Colaborativa",
                description: "El poder de imaginar y co-crear juntos."
              },
              {
                icon: Globe,
                emoji: "🌍",
                title: "Transformación Colectiva",
                description: "Porque crecer en comunidad multiplica los resultados."
              }
            ].map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <value.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Human Souls</h3>
              <p className="text-sm opacity-80 mb-4">
                Juntos somos la magia que transforma el mundo ✨
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Comunidad</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Cápsulas</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Soul Buddies</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Ecosistema</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Conéctate</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">YouTube</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">TikTok</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm opacity-80 mb-4">
                🌱 Súmate y recibe novedades exclusivas
              </p>
              <Button variant="secondary" size="sm">
                Suscribirme
              </Button>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>© 2025 Human Souls. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;