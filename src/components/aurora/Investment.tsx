import { Button } from "@/components/ui/button";

const Investment = () => (
  <section id="investment" className="relative py-16 md:py-20 bg-background overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold-soft)/0.35),transparent_60%)]" />
    <div className="container relative max-w-4xl">
      <div className="text-center mb-12">
        <span className="text-xs tracking-[0.35em] uppercase text-primary mb-6 block">Investimento</span>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
          Um <em className="text-gradient-gold">ativo estratégico</em>
          <br />para sua autoridade.
        </h2>
      </div>

      <div className="relative bg-card border border-primary/25 rounded-[2rem] p-10 md:p-16 editorial-shadow text-center">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-gradient-gold text-primary-deep text-[10px] tracking-[0.3em] uppercase">
          Método Aurora
        </div>

        <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">A partir de</p>
        <div className="text-5xl md:text-7xl text-foreground mb-2">
          12<span className="text-2xl align-top">x </span>R$305,28
        </div>
        <p className="text-muted-foreground font-light mb-8 mt-4">ou à vista por <span className="text-foreground font-medium">R$ 3.000,00</span></p>

        <div className="h-px w-24 bg-primary/30 mx-auto mb-8" />

        <p className="text-muted-foreground font-light italic max-w-lg mx-auto mb-10">
          Uma consultoria desenhada para profissionais que entendem o valor de uma direção estratégica refinada.
        </p>

        <Button asChild variant="aurora" size="xl">
          <a href="https://wa.me/5534992210101">Aplicar para o método</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Investment;
