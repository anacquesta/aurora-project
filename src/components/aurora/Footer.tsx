import logoAurora from "@/assets/aurora-logo.png";

const Footer = () => {
  const navLinks = [
    { label: "Como funciona", href: "#how" },
    { label: "Entregáveis", href: "#deliverables" },
    { label: "Investimento", href: "#investment" },
  ];

  return (
    <footer
      aria-label="Rodapé"
      className="bg-[#6b4228] px-[30px] py-8 lg:py-0 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-6 border-t border-[#b8924f]/20"
    >
      {/* Brand Logo */}
      <div className="shrink-0 -mt-20 -mb-20 lg:mt-0 lg:mb-0">
        <img
          src={logoAurora}
          alt="Logo Método Aurora"
          className="h-[250px] lg:h-[175px] w-auto object-contain"
        />
      </div>

      {/* Nav links */}
      <ul className="flex flex-wrap justify-center items-center m-0 p-0 list-none">
        {navLinks.map((link, index) => (
          <li key={link.href} className="flex items-center">
            <a
              href={link.href}
              className="text-[#f0e6db]/45 hover:text-[#d4aa6a] no-underline text-[0.82rem] tracking-[0.08em] font-sans transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </a>
            
            {/* Ponto separador (renderiza apenas se não for o último link) */}
            {index < navLinks.length - 1 && (
              <span className="text-[#f0e6db]/30 mx-2.5 text-xs">
                &bull;
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/mariavila.marketingmedico"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 text-[#f0e6db]/55 hover:text-[#d4aa6a] no-underline text-[0.82rem] tracking-[0.05em] font-sans transition-colors duration-300 shrink-0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-[18px] h-[18px]"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
        </svg>
        @mariavila.marketingmedico
      </a>
    </footer>
  );
};

export default Footer;