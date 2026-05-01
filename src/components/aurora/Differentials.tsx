import portrait from "@/assets/aurora-portrait.jpg";

const items = [
  { k: "+35", v: "contas gerenciadas no segmento da saúde" },
  { k: "100%", v: "estratégia personalizada e autoral" },
  { k: "9", v: "etapas de um método estruturado" },
  { k: "∞", v: "autonomia entregue ao cliente" },
];

const Differentials = () => (
  <section className="relative py-16 md:py-20 bg-background overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-16 items-stretch">
      <div className="relative lg:h-full min-h-[400px]">
        <div className="absolute -inset-6 aurora-glow rounded-[2rem] glow-pulse" />
        <img
          src={portrait}
          alt="Mariana Ávila — consultora estratégica em marketing médico"
          className="relative rounded-[2rem] w-full h-full object-cover object-[center_20%] editorial-shadow lg:absolute lg:inset-0"
          loading="lazy"
        />
      </div>

      <div>
        <span className="text-xs tracking-[0.35em] uppercase text-primary mb-6 block">Diferenciais</span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
          Experiência prática.
          <br />
          <em className="text-gradient-gold">Resultado refinado.</em>
        </h2>
        <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
          Mais de três dezenas de marcas conduzidas no universo da saúde. Um método nascido da prática,
          desenhado para profissionais que valorizam estratégia, sofisticação e independência.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {items.map((i) => (
            <div key={i.k} className="border-l-2 border-primary/40 pl-5">
              <div className="font-serif text-4xl text-gradient-gold mb-1">{i.k}</div>
              <p className="text-sm text-muted-foreground font-light leading-snug">{i.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Differentials;
