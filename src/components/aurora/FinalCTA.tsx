import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section
    id="aplicar"
    className="relative bg-background text-center overflow-hidden pb-5 md:py-5"
  >
    <div className="container relative max-w-3xl">
      <span className="text-xs tracking-[0.35em] uppercase text-primary mb-6 block">O próximo passo</span>

      <h2 className="font-serif text-3xl md:text-5xl lg:text-[3rem] text-foreground leading-[1.25] mb-4 max-w-[620px] mx-auto">
        Se você busca <em className="text-gradient-gold">clareza</em>, posicionamento e crescimento com estratégia
      </h2>

      <p className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-8">
        o Aurora é o próximo passo.
      </p>
    </div>
  </section>
);

export default FinalCTA;
