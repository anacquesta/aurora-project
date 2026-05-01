const steps = [
  { n: "01", t: "Onboarding estratégico", d: "Imersão inicial para entender essência, mercado e ambição." },
  { n: "02", t: "Diagnóstico e devolutiva", d: "Leitura técnica do posicionamento atual e oportunidades reais." },
  { n: "03", t: "Posicionamento digital", d: "Definição de narrativa, território e percepção de marca." },
  { n: "04", t: "Identidade visual", d: "Direção estética alinhada à autoridade do profissional." },
  { n: "05", t: "Estratégia de marketing", d: "Plano integrado de presença, atração e autoridade." },
  { n: "06", t: "Conteúdo e roteiros", d: "Roteiros para vídeos, stories e publicações de alto valor." },
  { n: "07", t: "Planejamento trimestral", d: "Calendário estratégico com foco em consistência." },
  { n: "08", t: "Endomarketing", d: "Cuidado com a experiência interna e percepção da equipe." },
  { n: "09", t: "Alinhamento final", d: "Encontro de fechamento com diretrizes para autonomia plena." },
];

const HowItWorks = () => (
  <section className="relative py-16 md:py-20 bg-gradient-warm" id="how">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-xs tracking-[0.35em] uppercase text-primary mb-6 block">Como funciona</span>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
          Um percurso <em className="italic text-gradient-gold">curado</em>,
          <br />em nove movimentos.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s) => (
          <article
            key={s.n}
            className="group relative bg-card/70 backdrop-blur-sm border border-primary/15 rounded-2xl p-8 editorial-shadow hover:-translate-y-1 hover:border-primary/40 transition-all duration-500"
          >
            <div className="font-serif italic text-5xl text-gradient-gold mb-4">{s.n}</div>
            <h3 className="font-serif text-2xl text-foreground mb-3">{s.t}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{s.d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
