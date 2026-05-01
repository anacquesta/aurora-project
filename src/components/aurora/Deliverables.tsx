import { useEffect, useRef } from "react";

const items = [
  {
    t: "Pack de Peças Editáveis",
    d: "Templates personalizados prontos para uso, alinhados à sua identidade visual e posicionamento.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    t: "Roteiros para Vídeos e Stories",
    d: "Scripts prontos e adaptados à sua voz, prontos para gravar com naturalidade e autoridade.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    t: "Planejamento Trimestral",
    d: "Calendário editorial detalhado para 90 dias de presença digital consistente e estratégica.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
  },
  {
    t: "Estratégia de Posicionamento",
    d: "Documento completo com nicho, diferencial, mensagem e diretrizes de comunicação digital.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    t: "Diagnóstico Estratégico Personalizado",
    d: "Análise completa do seu posicionamento atual com recomendações práticas e priorizadas para crescimento digital no mercado de saúde.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    wide: true,
  },
];

const Deliverables = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    if (!reveals) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .deliv-card { position: relative; transition: transform 0.3s ease; }
        .deliv-card:hover { transform: translateY(-6px); }
        .deliv-card::after { content: ""; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #b8924f, transparent); opacity: 0; transition: opacity 0.3s ease; }
        .deliv-card:hover::after { opacity: 1; }
      `}</style>

      <section
        ref={sectionRef}
        id="deliverables"
        className="relative py-16 md:py-20"
        style={{ background: "#f0e6d8" }}
      >
        <div className="container">
          {/* Cabeçalho centralizado com max-w-3xl (igual ao HowItWorks) */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs tracking-[0.35em] uppercase text-primary mb-6 block">Entregáveis</span>
            <h2
              className="reveal font-serif text-4xl md:text-5xl leading-tight mb-12"
              style={{ color: "#3d2410" }}
            >
              O que você recebe
              <br />
              <em className="not-italic" style={{ color: "#9a7a5c" }}>
                ao final do processo
              </em>
            </h2>
          </div>

          {/* Grid ocupando a largura total do container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={item.t}
                className={`deliv-card reveal border bg-white p-8${
                  item.wide ? " md:col-start-2 md:col-span-2" : ""
                }`}
                style={{
                  borderColor: "rgba(184,146,79,0.18)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-full mb-5"
                  style={{
                    border: "1px solid rgba(201,169,110,0.35)",
                    color: "#b8924f",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="font-serif text-xl mb-2"
                  style={{ color: "#3d2410" }}
                >
                  {item.t}
                </h3>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: "#6b4828" }}
                >
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Deliverables;