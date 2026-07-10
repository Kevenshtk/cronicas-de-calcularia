# Crônicas de Calculária

**Crônicas de Calculária** é um jogo educacional desenvolvido para apoiar o ensino da matemática por meio da gamificação. Inspirado em jogos de RPG, como *Dungeons & Dragons*, o projeto combina desafios matemáticos, narrativa e exploração em tabuleiros para tornar o processo de aprendizagem mais envolvente e motivador. Além de sua finalidade educacional, o projeto também serviu de base para a publicação de um artigo na plataforma DIO, apresentando a proposta e os conceitos aplicados durante seu desenvolvimento.

🔗[Acessar aplicação](https://kevenshtk.github.io/cronicas-de-calcularia/)

## 🎯 Objetivo

O objetivo foi desenvolver um jogo educacional capaz de tornar o aprendizado de conceitos matemáticos mais dinâmico e envolvente, aplicando conhecimentos como:

- HTML semântico;
- JavaScript;
- Sass;
- Arquitetura MVC;
- Organização modular do código;
- Manipulação do DOM;
- Desenvolvimento de interfaces responsivas;
- Gamificação aplicada ao ensino.

## 📄 Artigo

O desenvolvimento do Crônicas de Calculária também deu origem a um artigo publicado na plataforma DIO, no qual é apresentada a proposta do jogo e sua aplicação como ferramenta de apoio ao ensino da matemática.

🔗 [Artigo Dio](https://web.dio.me/articles/do-tabuleiro-a-sala-de-aula-aprendendo-matematica-com-jogos-de-rpg-3d244678763b?back=/articles)

## 📷 Demonstração

### Tela Inicial
![Tela Inicial](https://kevenshtk.github.io/cronicas-de-calcularia/public/assets/img/inicio.png)

### Tela dos Tabuleiros
![Tela dos Tabuleiros](https://kevenshtk.github.io/cronicas-de-calcularia/public/assets/img/tabuleiro.png)

## ✨ Funcionalidades

### Jogo

- Escolha de personagens
- Seleção do modo de jogo
- Sistema de turnos
- Movimentação no tabuleiro

### Perguntas

- Questões de múltipla escolha
- Feedback automático
- Progressão conforme resposta

### Interface

- Layout responsivo
- Narrativa contextualizada

### Funcionalidades em Desenvolvimento

- Sistema de vantagem e desvantagem dos personagens
- Modo de demostração

## 🛠️ Tecnologias

<img align="center" src="https://skillicons.dev/icons?i=html,sass,js" alt="icons"/>

## 📁 Estrutura

### 🏛️ Arquitetura
O projeto foi estruturado com foco na organização e manutenção do código, adotando a arquitetura MVC (Model-View-Controller) para os módulos JavaScript e uma organização modular para os arquivos de estilo utilizando Sass.

A arquitetura MVC promove a separação das responsabilidades entre a lógica de negócio, a interface e o controle da aplicação, além da arquitetura MVC, o projeto utiliza uma organização modular dos estilos com Sass, separando estilos globais, layouts e componentes reutilizáveis. Essa estrutura favorece a escalabilidade, a reutilização de código e a manutenção da aplicação.

```
├── public/
│   ├── assets/
│   │   ├── icons/
│   │   ├── img/
│   │   └── manual.pdf
│   ├── css/
│   └── js/
│       ├── controller/
│       ├── model/
│       ├── utils/
│       ├── view/
│       └── index.js
└── src/
    └── sass/
        ├── 1-base/
        ├── 2-layouts/
        └── 3-modules/
```

### 📦 Assets

Reúne todos os recursos estáticos utilizados pela aplicação.

- icons/ → Ícones utilizados na interface.
- img/ → Imagens do jogo, personagens, tabuleiros e demais recursos visuais.
- manual.pdf → Manual do jogo com instruções para os jogadores.

### ⚙️ JavaScript (MVC)

Os scripts da aplicação foram organizados seguindo o padrão Model-View-Controller, separando responsabilidades e facilitando a manutenção do código.

- controller/ → Controla o fluxo da aplicação, intermediando a comunicação entre a interface e a lógica do jogo.
- model/ → Contém os dados, regras de negócio e comportamentos relacionados às partidas.
- view/ → Responsável pela manipulação da interface e atualização dos elementos da página.
- utils/ → Funções utilitárias compartilhadas entre os módulos.

### 🎨 Estilos (Sass)

Os estilos foram organizados de forma modular para facilitar a reutilização e a manutenção do código.

- 1-base/ → Variáveis, animações, elementos reutilizáveis e estilos globais.
- 2-layouts/ → Estrutura visual das telas e organização dos layouts.
- 3-modules/ → Componentes específicos da interface, como tabuleiros, personagens, botões, dados e modal.

## ⭐ Destaques

- Gamificação aplicada ao ensino da matemática.
- Narrativa inspirada em RPG.
- Arquitetura MVC.
- Estilização organizada utilizando Sass.
- Sistema de perguntas contextualizadas.
- Projeto utilizado como base para publicação de artigo.

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Kevenshtk/cronicas-de-calcularia.git
   
2. Abra a pasta no VS Code e inicie com o Live Server:  
   > Atalho: Alt+L, depois Alt+O

## 🎮 Mecânica do jogo

- Cada jogador escolhe seu personagem.
- Ao clicar no dado, é exibido um card com uma pergunta de múltipla escolha, contendo apenas uma alternativa correta.
- O card apresenta  uma breve história de acordo com o tabuleiro atual onde é indicado qual o conceito matemático necessário para resolver a questão (com exeção ao ultimo tabuleiro).
- Se a resposta está correta, o jogador avança 1 casa, porém, se estiver incorre recua 1 casa. No ultimo tabuleiro, uma resposta errada faz o jogador retornar ao tabuleiro anterior.

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foram consolidados conhecimentos relacionados à arquitetura MVC, organização modular do código, manipulação do DOM, estilização com Sass e desenvolvimento de aplicações web voltadas ao contexto educacional.