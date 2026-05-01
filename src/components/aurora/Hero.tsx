import auroraBg from "@/assets/aurora-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${auroraBg})` }}
      />
      {/* Soft warm wash to harmonize with palette */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(30_25%_94%/0.25)_0%,hsl(28_30%_88%/0.05)_50%,hsl(25_25%_85%/0.35)_100%)]" />

      {/* Content */}
      <div className="relative z-10 container flex min-h-[100svh] flex-col items-center justify-center text-center py-16">
        {/* Wedding-invitation style sophisticated frame */}
        <div className="fade-up relative w-full max-w-4xl px-6 md:px-12 pt-[40px] pb-16 md:pb-12">
          {/* Outer thin gold border */}
          <div className="pointer-events-none absolute inset-0 border border-[hsl(var(--gold)/0.55)]" />
          {/* Inner double border */}
          <div className="pointer-events-none absolute inset-3 md:inset-4 border border-[hsl(var(--gold)/0.35)]" />

          {/* Corner ornaments — flourishes at each corner */}
          {/* Top-left */}
          <svg aria-hidden className="pointer-events-none absolute -top-3 -left-3 w-12 h-12 md:w-16 md:h-16 text-[hsl(var(--gold))]" viewBox="0 0 64 64" fill="none">
            <path d="M2 32 Q2 2 32 2" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <path d="M8 32 Q8 8 32 8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
            <circle cx="2" cy="2" r="1.6" fill="currentColor" />
          </svg>
          {/* Top-right */}
          <svg aria-hidden className="pointer-events-none absolute -top-3 -right-3 w-12 h-12 md:w-16 md:h-16 text-[hsl(var(--gold))]" viewBox="0 0 64 64" fill="none">
            <path d="M62 32 Q62 2 32 2" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <path d="M56 32 Q56 8 32 8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
            <circle cx="62" cy="2" r="1.6" fill="currentColor" />
          </svg>
          {/* Bottom-left */}
          <svg aria-hidden className="pointer-events-none absolute -bottom-3 -left-3 w-12 h-12 md:w-16 md:h-16 text-[hsl(var(--gold))]" viewBox="0 0 64 64" fill="none">
            <path d="M2 32 Q2 62 32 62" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <path d="M8 32 Q8 56 32 56" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
            <circle cx="2" cy="62" r="1.6" fill="currentColor" />
          </svg>
          {/* Bottom-right */}
          <svg aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 w-12 h-12 md:w-16 md:h-16 text-[hsl(var(--gold))]" viewBox="0 0 64 64" fill="none">
            <path d="M62 32 Q62 62 32 62" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <path d="M56 32 Q56 56 32 56" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
            <circle cx="62" cy="62" r="1.6" fill="currentColor" />
          </svg>

{/* Top center monogram ornament */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[hsl(var(--background))] px-10">
            <svg aria-hidden className="w-16 h-3 text-[hsl(var(--gold))]" viewBox="0 0 80 12" fill="none">
              <path d="M2 6 H30" stroke="currentColor" strokeWidth="0.8" />
              <path d="M50 6 H78" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="40" cy="6" r="2" fill="currentColor" />
              <circle cx="34" cy="6" r="0.8" fill="currentColor" />
              <circle cx="46" cy="6" r="0.8" fill="currentColor" />
            </svg>
          </div>
          {/* Bottom center ornament */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[hsl(var(--background))] px-10">
            <svg aria-hidden className="w-16 h-3 text-[hsl(var(--gold))]" viewBox="0 0 80 12" fill="none">
              <path d="M2 6 H30" stroke="currentColor" strokeWidth="0.8" />
              <path d="M50 6 H78" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="40" cy="6" r="2" fill="currentColor" />
              <circle cx="34" cy="6" r="0.8" fill="currentColor" />
              <circle cx="46" cy="6" r="0.8" fill="currentColor" />
            </svg>
          </div>

          {/* Inner content */}
          <div className="relative">
            {/* Eyebrow with ornaments */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-px w-10 bg-[hsl(var(--gold)/0.6)]" />
              <span className="text-foreground/70 text-sm md:text-xs tracking-[0.5em] uppercase">
                Método Aurora
              </span>
              <span className="h-px w-10 bg-[hsl(var(--gold)/0.6)]" />
            </div>

            <h1 className="font-serif text-foreground text-7xl md:text-7xl lg:text-[7.5rem] leading-none mb-6">
              <span className="block font-light">Direção</span>
              <span className="block italic text-[hsl(var(--primary-deep))]" style={{ marginTop: "15px", marginBottom: "-10px" }}>&amp;</span>
              <span className="block font-light">Estratégia</span>
            </h1>

            <div className="mx-auto mt-8 max-w-xl">
              <p className="text-foreground/80 text-lg md:text-lg font-light leading-relaxed mb-3">
                Um modelo de consultoria baseado em direção estratégica e autonomia.
              </p>
              <p className="text-foreground/55 text-base md:text-base font-light leading-relaxed italic">
                Para profissionais da saúde que desejam posicionamento, clareza e crescimento com consistência.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-6">
              <a
                href="#posicionamento"
                className="text-foreground/50 hover:text-foreground text-xs md:text-[10px] tracking-[0.4em] uppercase transition-colors"
              >
                Conheça o método ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
