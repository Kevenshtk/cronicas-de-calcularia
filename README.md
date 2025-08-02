# Crônicas de Calculária

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Usar](#como-usar)

## Sobre o Projeto

**Crônicas de Calculária** é um jogo competitivo que combina conceitos matemáticos com elementos de aventura inspirados em jogos de RPG, como *Dungeons & Dragons*. A cada partida, um ou dois jogadores terão que explorar diferentes tabuleiros, mergulhar em uma história cativante e aprimorar suas habilidades matemática. Competindo entre si, os jogadores buscam se tornar o vencedor, enquanto seus personagens embarcam em uma jornada para resgatar a princesa de Calculária das garras do inimigo.

## Tecnologias Utilizadas

<img align="center" src="https://skillicons.dev/icons?i=html,sass,js,nodejs" alt="icons"/>

## Telas
### Tela Inicial
![Tela Inicial](https://kevenshtk.github.io/cronicas-de-calcularia/public/assets/img/inicio.png)

### Tela dos Tabuleiros
![Tela dos Tabuleiros](https://kevenshtk.github.io/cronicas-de-calcularia/public/assets/img/tabuleiro.png)


## Funcionalidades

- Escolha de personagens
- Modo de jogo com 1 ou 2 jogadores
- Interface responsiva
- Sistema de movimentação em tabuleiro

### Funcionalidades em Desenvolvimento

- Sistema de vantagem e desvantagem dos personagens
- Modo de demostração


## Instalação

1. Clone o repositório:
   ```terminal
   git clone https://github.com/Kevenshtk/cronicas-de-calcularia.git
   
2. Abra a pasta no VS Code e inicie com o Live Server:  
   Atalho: Alt+L, depois Alt+O


## Como Usar

- Cada jogador escolhe seu personagem.
- Ao clicar no dado, é exibido um card com uma pergunta de múltipla escolha, contendo apenas uma alternativa correta.
- O card apresenta  uma breve história de acordo com o tabuleiro atual onde é indicado qual o conceito matemático necessário para resolver a questão (com exeção ao ultimo tabuleiro).
- Se a resposta está correta, o jogador avança 1 casa, porém, se estiver incorre recua 1 casa. No ultimo tabuleiro, uma resposta errada faz o jogador retornar ao tabuleiro anterior.
