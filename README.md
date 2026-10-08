# 🎮 Pedro Faber | Interactive Portfolio

### Um portfólio que você não apenas visita. Você explora.

Bem-vindo ao meu portfólio interativo!

Este projeto foi desenvolvido para apresentar minha trajetória profissional, meus conhecimentos e meus projetos de uma maneira diferente: por meio de uma experiência inspirada em jogos retrô, com elementos de RPG e uma interface arcade.

Em vez de navegar por páginas tradicionais, o visitante controla um personagem em um quarto virtual, interage com objetos e descobre diferentes partes da minha trajetória.

---

## 🌐 Idiomas / Languages

🇧🇷 **Português (BR)** | 🇺🇸 **English (EN)**

O portfólio oferece uma experiência interativa bilíngue, permitindo que cada visitante explore o projeto no idioma de sua preferência.

Na tela inicial, é possível selecionar **PT** ou **EN**. A escolha é aplicada aos menus, às informações profissionais, às instruções e às interações do jogo.

A preferência de idioma é armazenada localmente para as próximas visitas.

**English**

The portfolio provides a bilingual interactive experience in Brazilian Portuguese and English.

Visitors can select **PT** or **EN** on the title screen. Their selection applies to menus, professional information, instructions, and in-game interactions.

The selected language is saved locally for future visits.

---

## 🕹️ Como funciona?

A experiência começa em uma tela inspirada nos antigos fliperamas.

1. **INSERT COIN:** inicia a experiência.
2. **READY:** prepara a entrada no ambiente.
3. **QUARTO INTERATIVO:** explore o cenário controlando o personagem.
4. **INTERAÇÕES:** aproxime-se dos objetos e pressione `E` para descobrir informações.
5. **FINAL CHAPTER:** atravesse a porta para acessar o encerramento e os contatos.
6. **VOLTAR AO QUARTO:** retorne ao cenário e continue explorando.

### 🎮 Controles

| Tecla | Ação |
|---|---|
| `W A S D` | Movimentar o personagem |
| `↑ ↓ ← →` | Movimentar o personagem |
| `E` | Interagir com objetos |

---

## 💻 Tecnologias utilizadas

- **Next.js** — Framework React para desenvolvimento web.
- **React** — Construção de interfaces e componentes.
- **TypeScript** — Tipagem estática e organização do código.
- **Tailwind CSS** — Estilização e responsividade.
- **Phaser 3** — Motor de jogo responsável pelo cenário interativo, movimentação, animações e colisões.
- **React Context API** — Gerenciamento da preferência de idioma.
- **LocalStorage** — Persistência do idioma selecionado.
- **Git e GitHub** — Versionamento e hospedagem do código-fonte.

---

## ✨ Funcionalidades

- Tela inicial com identidade visual arcade.
- Seleção de idioma entre português e inglês.
- Persistência da preferência de idioma.
- Animação de inserção de moeda.
- Transição READY para o ambiente principal.
- Personagem com animações de movimentação.
- Cenário interativo com colisões.
- Interações por proximidade utilizando a tecla `E`.
- Menus com informações profissionais em dois idiomas.
- Vídeos integrados à apresentação.
- Encerramento cinematográfico.
- Links de contato e download de currículo.
- Retorno ao cenário após os créditos.

---

## 📂 Seções do portfólio

### 👨‍💻 About

Minha apresentação, trajetória, interesses e objetivos profissionais.

### 🚀 Projects

Projetos de desenvolvimento de software, automação e tecnologia, incluindo Aesyntra, Faber Tech, Pokédex e EcoPoint.

### 💼 Experience

Experiências profissionais e responsabilidades desempenhadas na área de tecnologia e em outras atividades.

### 🧠 Skills

Conhecimentos técnicos, ferramentas e tecnologias utilizadas.

### 🎓 Education

Formação acadêmica, cursos, bootcamps e desenvolvimento profissional contínuo.

---

## 🚀 Executando o projeto localmente

### Pré-requisitos

- Node.js
- npm
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/pedrohfaber-design/pedro-faber-portfolio.git
```

### 2. Acesse a pasta

```bash
cd pedro-faber-portfolio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

Abra o navegador em:

http://localhost:3000

### 5. Gere uma versão de produção

```bash
npm run build
```

### 6. Verifique o TypeScript

```bash
npx tsc --noEmit
```

### 7. Execute a verificação de código

```bash
npm run lint
```

---

## 🏗️ Organização do projeto

```text
app/
├── layout.tsx
├── page.tsx
├── room/
│   └── page.tsx
└── globals.css

components/
├── title-screen/
│   ├── TitleScreen.tsx
│   └── LanguageSwitcher.tsx
├── game/
│   └── GameCanvas.tsx
├── portfolio/
│   ├── PortfolioOverlay.tsx
│   ├── AboutMenu.tsx
│   ├── ProjectsMenu.tsx
│   ├── ExperienceMenu.tsx
│   ├── SkillsMenu.tsx
│   └── EducationMenu.tsx
└── credits/
    └── CreditsScreen.tsx

game/
├── events/
│   └── EventBus.ts
└── scenes/
    └── RoomScene.ts

i18n/
└── LanguageContext.tsx

public/
├── room/
├── sprites/
└── videos/
```

O projeto combina componentes React com uma cena Phaser. A comunicação entre as interfaces e o ambiente do jogo é realizada por meio de um sistema de eventos.

O sistema de internacionalização utiliza React Context API e LocalStorage para disponibilizar os idiomas português e inglês, incluindo as interações do ambiente Phaser.

---

## 🎯 Objetivo

Este projeto nasceu da vontade de unir desenvolvimento web, criatividade e minha paixão por jogos.

Além de apresentar meu perfil profissional, o portfólio demonstra a integração de diferentes tecnologias em uma aplicação interativa.

A proposta é transformar uma apresentação profissional em uma experiência memorável, sem deixar de lado a organização, a usabilidade e a qualidade do desenvolvimento.

---

## 📬 Contato

**Pedro Henrique Faber**

- **GitHub:** https://github.com/pedrohfaber-design
- **LinkedIn:** https://www.linkedin.com/in/pedrohenri