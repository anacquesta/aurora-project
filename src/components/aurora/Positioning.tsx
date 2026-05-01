import { Compass, Sparkles, Target } from "lucide-react";

const items = [
  { icon: Compass, title: "Direção", text: "Encontros estruturados que orientam decisões consistentes na rotina clínica e digital." },
  { icon: Sparkles, title: "Refinamento", text: "Materiais autoexecutáveis criados a partir da experiência prática no mercado da saúde." },
  { icon: Target, title: "Autonomia", text: "Você conduz seu posicionamento com clareza estratégica e independência real." },
];

const Positioning = () => (
  <section className="relative py-16 md:py-20 bg-background overflow-hidden">
    <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full aurora-glow opacity-60" />
    <div className="container relative">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-xs tracking-[0.35em] uppercase text-primary mb-6 block">Posicionamento</span>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
          Estratégia que <em className="text-gradient-gold">orienta</em>.
          <br />
          Estética que <em className="text-gradient-gold">posiciona</em>.
        </h2>
        <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-light">
          Encontros estruturados e materiais autoexecutáveis, desenvolvidos a partir da experiência prática,
          para orientar decisões consistentes na saúde.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="text-center group">
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-warm border border-primary/20 group-hover:scale-110 transition-transform duration-500">
              <Icon className="h-6 w-6 text-primary-deep" strokeWidth={1.2} />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed font-light">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Positioning;
