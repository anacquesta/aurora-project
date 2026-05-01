# ✨ Método Aurora | Posicionamento & Estratégia Digital

> "Estratégia que orienta. Estética que posiciona."

Uma Landing Page de alta conversão e design *premium*, desenvolvida para apresentar a consultoria estratégica em marketing médico da especialista Mariana Ávila. 

O projeto foi arquitetado para transmitir autoridade, elegância e confiança, traduzindo o alto nível do serviço através de uma interface *Clean & Minimal*, paleta de cores sofisticada (tons de nude, dourado e texturas *dark premium*) e animações fluidas baseadas em CSS e Intersection Observers.

---

## 🚀 Tecnologias e Arquitetura

O projeto foi construído focado em performance, componentização e facilidade de manutenção, utilizando um stack moderno:

* **[React 18](https://react.dev/):** Biblioteca principal para construção da interface componentizada.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior segurança e previsibilidade do código.
* **[Tailwind CSS](https://tailwindcss.com/):** Estilização utilitária para um design responsivo, ágil e altamente customizado.
* **[Vite](https://vitejs.dev/):** Bundler super rápido para o ambiente de desenvolvimento e build otimizado.
* **[Lucide React](https://lucide.dev/):** Biblioteca de ícones SVG leves e consistentes.

---

## 💎 Destaques do Projeto

* **Design de Alto Padrão:** UI/UX focada no nicho de saúde *premium*, utilizando contrastes suaves, tipografia serifada elegante (`Cormorant Garamond`) e botões com efeitos *glow* e *hover* imersivos.
* **Refatoração e Otimização:** O projeto passou por um *code cleanup* rigoroso para remover dependências não utilizadas e *boilerplates* desnecessários, resultando em um bundle final extremamente leve e carregamento rápido.
* **Animações ao Rolar (Scroll Reveal):** Implementação de um sistema customizado usando `IntersectionObserver` puro para revelar elementos suavemente à medida que o usuário desce a página, melhorando a retenção de atenção.
* **100% Responsivo:** Experiência fluida e adaptada perfeitamente para dispositivos móveis, tablets e telas *ultrawide*.

---

## 📂 Estrutura de Diretórios (Resumo)

A arquitetura do projeto segue um padrão limpo e modular:

```text
├── src/
│   ├── assets/               # Imagens, logos e recursos estáticos
│   ├── components/
│   │   ├── aurora/           # Componentes específicos das seções da Landing Page
│   │   │   ├── Hero.tsx
│   │   │   ├── Positioning.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Differentials.tsx
│   │   │   ├── Deliverables.tsx
│   │   │   ├── Investment.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/               # Componentes de UI genéricos/reutilizáveis
│   ├── pages/                # Páginas e rotas da aplicação
│   ├── App.tsx               # Root component e configuração de roteamento
│   └── index.css             # Estilos globais e variáveis de tema (Tailwind)