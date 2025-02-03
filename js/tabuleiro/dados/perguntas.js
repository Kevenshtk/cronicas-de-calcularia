const perguntasInicio = [
    {
        story: "Enquanto deixava o reino, você avistou uma pequena loja, com curiosidade se aproximou e presenciou o comerciante cantarolando alegremente uma canção: Na função de 1º grau AX+B, B representa o valor em que a reta da função passa pelo eixo Y do gráfico, ou seja, quando X for 0.",
        question: "Na função 11X+4, qual é o valor em que a reta passa pelo eixo Y?",
        options: ["No valor 11.", "No valor 4.", "No valor 15.", "No valor 7."],
        correctAnswer: "No valor 4."
    },

    {
        story: "Passando pelo distrito comercial, você se surpreende ao ouvir alguém gritando: Na função de 1º grau AX+B, B representa o valor em que a reta da função passa pelo eixo Y do gráfico, ou seja, quando X for 0. Olhando na direção da voz, você vê um goblin remanescente do exército inimigo atacando um aldeão inocente.",
        question: "Na função 7X-2, qual é o valor em que a reta passa pelo eixo Y?",
        options: ["No valor -2.", "No valor -7.", "No valor -5.", "No valor -9."],
        correctAnswer: "No valor -2."
    },

    {
        story: "Você está parado em frente a uma multidão de aldeões que estão interditando o caminho e discutindo fervorosamente. Na função de 2º grau AX²+BX+C, C representa o valor em que a parábola da função passa pelo eixo Y do gráfico, ou seja, quando X for 0, você escuta um deles dizer. Procurando um meio de passar pelas pessoas, você observa seus arredores e nota uma pequena matilha de cães entrando em um corredor.",
        question: "Na função 2X²+3X+5, qual é o valor em que a reta passa pelo eixo Y?",
        options: ["No valor 2.", "No valor 8.", "No valor 3.", "No valor 5."],
        correctAnswer: "No valor 5."
    },

    {
        story: "Quase próximo a saída do reino, você sente alguém te observando, olhando aos arredores não encontra nada fora do comum. Mas quando se vira pra seguir a diante, uma lâmina é colocada em seu pescoço e uma voz desconhecida diz: Na função de 1º grau AX+B, A representa a inclinação da reta, valores de A positivos teremos uma reta crescente e valores de A negativos teremos uma reta decrescente",
        question: "Na função AX-3, qual é valor de A, para que a reta seja crescente?",
        options: ["-3.", "0.", "3.", "-5."],
        correctAnswer: "3."
    },

    {
        story: "Um andarilho de aparência simples e vestes claras o aborda enquanto você caminhava, se apresenta humildemente, lhe estendendo a sua mão e dizendo: Em uma função o seu grau é definido pelo expoente mais alto, se o X não possuir expoente essa função é de 1º grau.",
        question: "Na função 2X²+5X-3X⁴+X3, qual é o grau da função?",
        options: ["A função é de 3º grau.", "A função é de 4º grau.", "A função é de 2º grau.", "A função é de 1º grau."],
        correctAnswer: "A função é de 4º grau."
    },

    {
        story: "Você se vê em frente a uma grande carroça de repolhos parada na estrada, olhando com mais atenção percebe a presença de um humilde senhor tentando a levantar sozinho para que possa encaixar uma roda que está caída ao seu lado. O aldeão nota você, olha em sua direção e diz: Em uma função o seu grau é definido pelo expoente mais alto, se o X não possuir expoente essa função é de 1º grau.",
        question: "Na função 4x⁴-5x³+3X⁵-3X, qual é o grau da função?",
        options: ["A função é de 5º grau.", "A função é de 4º grau.", "A função é de 3º grau.", "A função é de 1º grau."],
        correctAnswer: "A função é de 5º grau."
    },

    {
        story: "Enquanto andava distraído pela estrada do reino, você escuta um desconhecido gritar: Na função de 1º grau AX+B, A representa a inclinação da reta, valores de A positivos teremos uma reta crescente e valores de A negativos teremos uma reta decrescente. Olhando na direção da voz, você percebe uma carroça desgovernada indo em sua direção.",
        question: "Na função AX+4, qual é valor de A, para que a reta seja decrescente?",
        options: ["4.", "0.", "-4.", "2."],
        correctAnswer: "-4."
    },

    {
        story: "Passando por uma região em ruínas do reino, você ouve grunhidos distantes. Com cautela, você se aproxima e avista um bando de goblins conversando: Na função de 2º grau AX²+BX+C, C representa o valor em que a parábola da função passa pelo eixo Y do gráfico, ou seja, quando X for 0.",
        question: "Na função 3X²-4X-3, qual é o valor em que a reta passa pelo eixo Y?",
        options: ["No valor 3.", "No valor 4.", "No valor -1.", "No valor -3."],
        correctAnswer: "No valor -3."
    }
];

const perguntasPonte = [
    {
        story: "Enquanto cruzava a ponte, você viu algo inusitado: um pequeno  rato, vestido com um colete colorido e um chapéu elegante, exibindo uma pequena mesa cheia de bugigangas. Em frente a ela havia uma placa com uma minúscula frase escrita: O expoente de uma variável, representa quantas vezes você vai repetir esse número na multiplicação, X2 repete duas vezes, X3 repete três e assim sucessivamente.",
        question: "Qual é o f(x) da função X², quando X for 5?",
        options: ["f(x) = 25.", "f(x) = 5.", "f(x) = 10.", "f(x) = 50."],
        correctAnswer: "f(x) = 25."
    },

    {
        story: "Caminhando pela ponte, você de repente se depara com um  grupo de serpentes venenosas, que se contorciam e sibilavam ameaçadoramente: Na função de 2º grau AX²+BX+C, A representa a direção da concavidade da parábola da função, A maior que 0 indica que a concavidade é para cima e A menor que 0 indica que a concavidade é para baixo. Instintivamente você recua percebendo o perigo iminente.",
        question: "Na função AX²+5X-3, qual é valor de A, para que a concavidade seja para baixo? ",
        options: ["A maior que 0.", "A igual 0.", "A menor que 0.", "A maior ou igual 0."],
        correctAnswer: "A menor que 0."
    },
    
    {
        story: "Enquanto avançava pela ponte, uma nuvem de gaivotas surgiu repentinamente a sua frente, voando em círculos ao seu redor e emitindo cacarejos estridentes: Na função de 2º grau AX²+BX+C, o Δ indica quantas raízes essa função possuí, Δ maior que 0 indica que tem 2 raízes, Δ menor que 0 indica que não tem raízes e Δ igual a 0 indica que tem 1 raiz.",
        question: "Na função X²+2X-3, onde Δ equivale a 16, quantas raízes possuí? ",
        options: ["Possuí 1 raízes.", "Possuí nenhuma raízes.", "Possuí 3 raízes.", "Possuí 2 raízes."],
        correctAnswer: "Possuí 2 raízes."
    },

    {
        story: "Atravessando a ponte, você foi surpreendido por um indivíduo sorrateiro, emergindo das sombras com passos furtivos. Rápido como um raio, o ladrão tentou desviar a sua atenção fazendo movimentos ágeis para tentar roubar seus pertences e falando: Na função de 1º grau AX+B, a raiz representa o valor em que a reta da função passa pelo eixo X do gráfico, ou seja, quando Y for 0 (o resultado é igual a 0). ",
        question: "Na função 2X-10, qual é a sua raiz? ",
        options: ["A raiz é 15.", "A raiz é 25.", "A raiz é 5.", "A raiz é 0."],
        correctAnswer: "A raiz é 5."
    },

    {
        story: "Avançando pela ponte você avista um andarilho solitário à distância. Ele estava cabisbaixo perdido em seus pensamentos. Ao se aproximar, o andarilho ergueu o olhar para você e sorriu com gentileza. Com uma voz calma e tranquila começou a te contar: Na função de 2º grau AX²+BX+C, substitua X pelo seu valor, multiplique o seu quadrado por A, multiplique o seu valor por B, e some todos os resultados com C.",
        question: "Qual é o f(x) da função X²+2X+6, quando X for 3?",
        options: ["f(x) = 21.", "f(x) = 27.", "f(x) = 30.", "f(x) = 12."],
        correctAnswer: "f(x) = 21."
    },

    {
        story: "Cruzando a ponte, você avistou uma figura solitária sentada à beira do abismo, parecendo abatida. Ao se aproximar, percebeu que era um senhor idoso, com os olhos cheios de tristeza enquanto jogava palavras aos ventos: Na função de 1º grau AX/B, você substitui X pelo seu valor, multiplica ele pelo valor de A e divide pelo valor de B para obter o resultado. ",
        question: "Qual é o f(x) da função 3X/2, quando X for 4? ",
        options: ["f(x) = 4.", "f(x) = 8.", "f(x) = 12.", "f(x) = 6."],
        correctAnswer: "f(x) = 6."
    },

    {
        story: "Você atravessava a ponte, quando uma tempestade surge subitamente, transformando o céu claro e calmo em um céu escuro com ventos e chuvas fortes. Enquanto isso você reflete interiormente: Na função de 1º grau AX+B, você substitui X pelo seu valor, multiplica ele pelo valor de A e soma com o valor de B para obter o resultado.",
        question: "Qual é o f(x) da função 3X+2, quando X for 2? ",
        options: ["f(x) = 7.", "f(x) = 8.", "f(x) = 9.", "f(x) = 10."],
        correctAnswer: "f(x) = 8."
    },

    {
        story: "Avançando pela ponte, você avistou um bando de harpias pairando no céu, pareciam estar procurando por presas enquanto se comunicavam entre si: Na função de 1º grau AX+B, você substitui X pelo seu valor, multiplica ele pelo valor de A e soma com o valor de B para obter o resultado. ",
        question: "Qual é o f(x) da função 2X+4, quando X for 3? ",
        options: ["f(x) = 12.", "f(x) = 10.", "f(x) = 9.", "f(x) = 20."],
        correctAnswer: "f(x) = 10."
    }
];

const perguntasFloresta = [
    {
        story: "Entre as sombras da floresta, sob um amontoado de folhas, você se encontra com um comerciante élfico usando trajes exóticos, com um aceno gracioso ele o cumprimenta dizendo: Na função de 2º grau AX²+BX+C, o Δ indica quantas raízes essa função possuí, Δ maior que 0 indica que tem 2 raízes, Δ menor que 0 indica que tem raízes e Δ igual a 0 indica que tem 1 raiz.",
        question: "Na função X²+2X+1, onde Δ equivale a 0, quantas raízes possuí?",
        options: ["Tem 4 raiz.", "Tem 2 raiz.", "Tem 1 raiz.", "Tem 3 raiz."],
        correctAnswer: "Tem 1 raiz."
    },

    {
        story: "Avançando pela densa floresta, você escuta vozes conversando: Na função de 1º grau AX+B, a raiz representa o valor em que a reta da função passa pelo eixo X do gráfico, ou seja, quando Y for 0 (o resultado é igual a 0). Olhando na direção, você percebe figuras reptilianas emergindo das sombras, com olhos amarelos e dentes afiados.",
        question: "Na função 2X+12, qual é a sua raiz?",
        options: ["A raiz é -6.", "A raiz é 6.", "A raiz é 0.", "A raiz é -3.", "A raiz é 3."],
        correctAnswer: "A raiz é -6."
    },

    {
        story: "Caminhando pela floresta, você presencia uma figura encapuzada emergindo dos arbustos próximos, seus olhos brilhavam com astúcia enquanto dizia: Na função de 1º grau AXB, você substitui X pelo seu valor, multiplica ele pelo valor de A e subtrai com o valor de B para obter o resultado.",
        question: "Qual é o f(x) da função 2X-3, quando X for 4?",
        options: ["f(x) = 15.", "f(x) = 5.", "f(x) = 20.", "f(x) = 10."],
        correctAnswer: "f(x) = 5."
    },

    {
        story: "Enquanto andava pela vegetação da floresta, de repente, uma família de esquilos ágeis aparecem saltando de galho em galho ao seu redor, você tenta espanta-los dizendo: O expoente de uma variável, representa quantas vezes você vai repetir esse número na multiplicação, X² repete duas vezes, X³ repete três e assim sucessivamente.",
        question: "Qual é o f(x) da função X3, quando X for 3?",
        options: ["f(x) = 18.", "f(x) = 24.", "f(x) = 27.", "f(x) = 30."],
        correctAnswer: "f(x) = 27."
    },

    {
        story: "Enquanto andava perdido na floresta, uma figura solitária surge à sua frente. O homem parecia conhecer bem o ambiente. Você se aproxima pedindo informações: Na função de 1º grau AX-B, você substitui X pelo seu valor, multiplica ele pelo valor de A e subtrai com o valor de B para obter o resultado.",
        question: "Qual é o f(x) da função 3X-2, quando X for 2?",
        options: ["f(x) = 2.", "f(x) = 3.", "f(x) = 1.", "f(x) = 4."],
        correctAnswer: "f(x) = 4."
    },

    {
        story: "Se aventurando pela densa vegetação da floresta, você escuta um chamado de socorro ecoando entre as árvores: Na função de 2º grau AX²+BX+C, A representa a direção da concavidade da parábola da função, A maior que 0 indica que a concavidade é para cima e A menor que 0 indica que a concavidade é para baixo.",
        question: "Na função AX²-3X+4, qual é valor de A, para que a concavidade seja para baixo?",
        options: ["A maior que 0.", "A igual 0.", "A menor que 0.", "A maior ou igual 0."],
        correctAnswer: "A menor que 0."
    },

    {
        story: "Adentrando mais profundamente na floresta, uma tempestade súbita desaba sobre a vegetação, fazendo você rapidamente refletir consigo mesmo: Na função de 1º grau AX/B, você substitui X pelo seu valor, multiplica ele pelo valor de A e divide pelo valor de B para obter o resultado.",
        question: "Qual é o f(x) da função 2X/3, quando X for 6?",
        options: ["f(x) = 4.", "f(x) = 12.", "f(x) = 16.", "f(x) = 8."],
        correctAnswer: "f(x) = 4."
    },

    {
        story: "Avançando pela floresta, você se depara com um acampamento improvisado entre as árvores, com mais atenção você ouve vozes: Na função de 2º grau AX²+BX+C, substitua X pelo seu valor, multiplique o seu quadrado por A, multiplique o seu valor por B, e some todos os resultados com C. Reconhecendo este lugar como um acampamento Orc.",
        question: "Qual é o f(x) da função X²+X+3, quando X for 2?",
        options: ["f(x) = 9.", "f(x) = 8.", "f(x) = 7.", "f(x) = 6."],
        correctAnswer: "f(x) = 9."
    }
];

const perguntasDeserto = [
    {
        story: "O sol escaldante estava alto no céu, e no horizonte seu olhar avistou uma tenda, ondulando como uma miragem e na sua frente uma placa dizia: Na função de 1º grau AX-B, você substitui X pelo seu valor, multiplica ele pelo valor de A e subtrai com o valor de B para obter o resultado.",
        question: "Qual é o f(x) da função 3X-5, quando X for 5?",
        options: ["f(x) = 10.", "f(x) = 20.", "f(x) = 15.", "f(x) = 25."],
        correctAnswer: "f(x) = 10."
    },

    {
        story: "Enquanto caminhava pela vastidão de areia, de repente, um som corta o ar, quebrando o silêncio.",
        question: "Qual é o f(x) da função 2X+5, quando X for 4?",
        options: ["f(x) = 12.", "f(x) = 3.", "f(x) = 10.", "f(x) = 13."],
        correctAnswer: "f(x) = 13."
    },

    {
        story: "Enquanto caminhava pela vastidão de areia, de repente, um som corta o ar, quebrando o silêncio.",
        question: "Na função 3X-9, qual é a sua raiz?",
        options: ["A raiz é 3.", "A raiz é 9.", "A raiz é -3.", "A raiz é 6."],
        correctAnswer: "A raiz é 3."
    },

    {
        story: "Enquanto avançava pelo deserto, uma voz ecoa pelo vento: Na função de 1º grau AX/B, você substitui X pelo seu valor, multiplica ele pelo valor de A e divide pelo valor de B para obter o resultado. Olhando na sua direção você vê um vulto rápido como uma sombra deslizando entre as dunas, desaparecendo e reaparecendo como um fantasma.",
        question: "Qual é o f(x) da função 2X/4, quando X for 8?",
        options: ["f(x) = 8.", "f(x) = 4.", "f(x) = 12.", "f(x) = 16."],
        correctAnswer: "f(x) = 4."
    },

    {
        story: "Na jornada pelo deserto, uma figura solitária se destacava no horizonte. Um andarilho caminhava pela paisagem escaldante. Enquanto se aproximava de você, o mesmo dizia: O expoente de uma variável, representa quantas vezes você vai repetir esse número na multiplicação, X² repete duas vezes, X³ repete três e assim sucessivamente.",
        question: "Qual é o f(x) da função X³, quando X for 2?",
        options: ["f(x) = 10.", "f(x) = 15.", "f(x) = 9.", "f(x) = 8."],
        correctAnswer: "f(x) = 8."
    },

    {
        story: "Vagando pelo deserto enquanto o sol brilhava sobre a paisagem árida, criando uma calor sufocante. De repente, um grito desesperado perfurou o ar, quebrando o silêncio opressivo do deserto: Na função de 2º grau AX²+BX+C, substitua X pelo seu valor, multiplique o seu quadrado por A, multiplique o seu valor por B, e some todos os resultados com C",
        question: "Qual é o f(x) da função X²-2X+4, quando X for 2?",
        options: ["f(x) = 20.", "f(x) = 4.", "f(x) = 15.", "f(x) = 2."],
        correctAnswer: "f(x) = 4."
    },

    {
        story: "Enquanto o sol atingia seu ápice no céu e sua pele arde sob o calor escaldante, você suplica: Na função de 2º grau AX²+BX+C, A representa a direção da concavidade da parábola da função, A maior que 0 indica que a concavidade é para cima e A menor que 0 indica que a concavidade é para baixo. Quando menos esperava, uma tempestade de areia surge no horizonte.",
        question: "Na função AX²-3X+5, qual é valor de A, para que a concavidade seja para cima?",
        options: ["A maior que 0.", "A igual 0.", "A menor que 0.", "A maior ou igual 0."],
        correctAnswer: "A maior que 0."
    },

    {
        story: "Avançando pelo deserto, o sol estava baixo no céu, quando você avistou uma estrutura antiga, encoberta pelo tempo e pelas areias do deserto, contendo hieróglifos dizendo: Na função de 2º grau AX²+BX+C, o Δ indica quantas raízes essa função possuí, Δ maior que 0 indica que tem 2 raízes, Δ menor que 0 indica que não tem raízes e Δ igual a 0 indica que tem 1 raiz.",
        question: "Na função 2X²-X+4, onde Δ equivale a -31, quantas raízes possuí?",
        options: ["Não tem raízes.", "4 raízes.", "1 raízes.", "2 raízes."],
        correctAnswer: "Não tem raízes."
    }
];

const perguntasVale = [
    {
        story: "Enquanto caminhava pelas águas fétidas do pântano, você avista uma pequena embarcação flutuando sobre as águas. Na função de 2º grau AX²+BX+C, para calcular o Δ você substitui os valores de A, B e C na fórmula B²-4AC, subtraia do quadrado de B, a multiplicação de -4 por A e por C. Estava escrito em seu casco.",
        question: "Na função X²-3X+2, qual é o valor do Δ?",
        options: ["Δ é -1.", "Δ é -2.", "Δ é 1.", "Δ é 2."],
        correctAnswer: "Δ é 1."
    },

    {
        story: "Andando pelas lamas do pântano, você se depara com uma região repleta de teias pegajosas por toda parte. Rapidamente, sua mente começa a trabalhar: Na função de 2º grau AX²+BX+C, para calcular o Δ você substitui os valores de A, B e C na fórmula B²-4AC, subtraia do quadrado de B, a multiplicação de -4 por A e por C.",
        question: "Na função 2x²-4X+2, qual é o valor do Δ?",
        options: ["Δ é -1.", "Δ é 0.", "Δ é 1.", "Δ é 2."],
        correctAnswer: "Δ é 0."
    },

    {
        story: "Navegando pelas águas do pântano uma silhueta majestosa surge entre os galhos retorcidos das árvores, revelando ser um urso coruja, você tenta comunicação dizendo: A função de 2º grau AX²+BX+C pode possuir até duas raízes, para acha-las basta usar a equação (x = (-B +- raiz de Δ) / (2 x A)), onde você vai somar ou subtrair o valor negativo de B pela raiz quadrada do Δ e dividir por duas o valor de A.",
        question: "Na função X²-3X+2, onde Δ equivale a 1, quais os valores das raízes?",
        options: ["são 2 e 2.", "são 2 e 3.", "são 3 e 1.", "são 1 e 2."],
        correctAnswer: "são 1 e 2."
    },

    {
        story: "Avançando pelo pântano, você percebe movimentos entre as sombras. De repente, uma figura emerge das névoas densas, seu rosto oculto por um capuz enquanto fala: AX²+BX+C pode possuir até duas raízes, para acha-las basta usar a equação(x = (-B +- raiz de Δ) / (2 x A)), onde você vai somar ou subtrair o valor negativo de B pela raiz quadrada do Δ e dividir por duas o valor de A.",
        question: "Na função X²-2X+1, onde Δ equivale a 0, qual o valorda raiz?",
        options: ["O valor da raiz é 15.", "O valor da raiz é 1.", "O valor da raiz é 10.", "O valor da raiz é 20."],
        correctAnswer: "O valor da raiz é 1."
    },

    {
        story: "Se aventurando pelo pântano, você avista ao longe um homem solitário com as roupas encharcadas de lama sentado em um tronco retorcido. Ao se aproximar, você o cumprimenta: Uma das propriedades para derivar uma função diz: Em f(x) = Xn a função derivada será f'(x) = n.X elevado a n-1, ou seja, você subtrai 1 do expoente e multiplica o seu valor original por X.",
        question: "Qual é o f'(x) derivada da função f(x) = x³+2x²?",
        options: ["f'(x) = 3x+4x.", "f'(x) = 3x²+4x.", "f'(x) = 2x²+6x." ,"f'(x) = 5x²+5x."],
        correctAnswer: "f'(x) = 3x²+4x."
    },

    {
        story: "Caminhando pelas águas traiçoeiras do pântano, você ouve um pedido de socorro: Uma das propriedades para derivar uma função diz: Em f(x) = Xn a função derivada será f'(x) = n.X elevado a n-1, ou seja, você subtrai 1 do expoente e multiplica o seu valor original por X. Olhando na direção você avista um viajante afundando numa espécie de lama movediça.",
        question: "Qual é o f'(x) derivada da função f(x) = 2x⁴+x³?",
        options: ["f'(x) = 8x³+3x²", "f'(x) = 8x+3x", "f'(x) = 3x³+8x²", "f'(x) = 4x³+1x²"],
        correctAnswer: "f'(x) = 8x³+3x²"
    },

    {
        story: "Atravessando o pântano, você não percebe que gradualmente a névoa ficou mais densa, apenas notando quando já estavacompletamente perdido. Isso o faz ter que pensar em um plano para escapar: Uma das propriedades para derivar uma função diz: Em f(x) = C a função derivada será f'(x) = 0, ou seja, quando o valor está sozinho sem o X ele será igual a 0.",
        question: "Qual é o f'(x) derivada da função f(x) = 26?",
        options: ["f'(x) = 0.", "f'(x) = 1.", "f'(x) = 2.", "f'(x) = 5."],
        correctAnswer: "f'(x) = 0."
    },

    {
        story: "Atravessando o pântano, você é envolvido por uma aura assustadora. Uma das propriedades para derivar uma função diz: Em f(x) = C a função derivada será f'(x) = 0, ou seja, quando o valor está sozinho sem o X ele será igual a 0. Enquanto pensa, você vê na direção desse sentimento, a presença de um Ent, uma árvore viva.",
        question: "Qual é o f'(x) derivada da função f(x) = 12?",
        options: ["f'(x) = 5.", "f'(x) = 4.", "f'(x) = 10.", "f'(x) = 0."],
        correctAnswer: "f'(x) = 0."
    }
];

const perguntasVulcao = [
    {
        story: "Adentrando no árido vulcão, você tem um encontro improvável com um comerciante que habilmente lhe oferece seus produtos: Uma das propriedades para derivar uma função diz: Em f(x) = C a função derivada será f'(x) = 0, ou seja, quando o valor está sozinho sem o X ele será igual a 0.",
        question: "Qual é o f'(x) derivada da função f(x) = 64?",
        options: ["f'(x) = 5.", "f'(x) = 4.", "f'(x) = 10.", "f'(x) = 0."],
        correctAnswer: "f'(x) = 0."
    },

    {
        story: "Avançando pelo vulcão, uma presença imponente surge inesperadamente a sua frente. Uma das propriedades para derivar uma função diz: Em f(x) = C a função derivada será f'(x) = 0, ou seja, quando o valor está sozinho sem o X ele será igual a 0. Um golem de rocha e magma o ameaça por adentrar nesse lugar sem sua permissão.",
        question: "Qual é o f'(x) derivada da função f(x) = 52?",
        options: ["f'(x) = 0.", "f'(x) = 10.", "f'(x) = 15.", "f'(x) = -1."],
        correctAnswer: "f'(x) = 0."
    },

    {
        story: "Caminhando pelo vulcão, se depara com uma salamandra aparentemente dócil, criatura de fogo e calor. Você se aproxima e tenta uma interação com o animal: Na função de 2º grau AX²+BX+C, para calcular o Δ você substitui os valores de A, B e C na fórmula B²-4AC, subtraia do quadrado de B, a multiplicação de -4 por A e por C",
        question: "Na função X²+4X+5, qual é o valor do Δ?",
        options: ["Δ é -2.", "Δ é 2.", "Δ é -4.", "Δ é 1."],
        correctAnswer: "Δ é -4."
    },

    {
        story: "Enquanto caminhava pelas cavernas quentes do vulcão, inesperadamente, um ladrão surge à sua frente, ameaçando-o para que entregue seus pertences: Na função de 2º grau AX²+BX+C, para calcular o Δ você substitui os valores de A, B e C na fórmula B²-4AC, subtraia do quadrado de B, a multiplicação de -4 por A e por C.",
        question: "Na função 2X²+5X+3, qual é o valor do Δ?",
        options: ["Δ é -1.", "Δ é 3.", "Δ é -3.", "Δ é 1."],
        correctAnswer: "Δ é 1."
    },

    {
        story: "Avançando pelos corredores escaldantes do vulcão, um andarilho solitário surge a sua frente, animado por finalmente encontrar alguém ele começa a dizer: AX²+BX+C pode possuir até duas raízes, para acha-las basta usar a equação (x = (-B +- raiz de Δ) / (2 x A)), onde você vai somar ou subtrair o valor negativo de B pela raiz quadrada do Δ e dividir por duas o valor de A.",
        question: "Na função 3X²-6X+3, onde Δ equivale a 0, qual o valor da raiz?",
        options: ["A raiz é 3.", "A raiz é 2.", "A raiz é -3.", "A raiz é 1."],
        correctAnswer: "A raiz é 1."
    },

    {
        story: "Enquanto explorava o perigoso vulcão, você avista um alquimista desesperado: AX²+BX+C pode possuir até duas raízes, para acha-las basta usar a equação (x = (-B +- raiz de Δ) / (2 x A)), onde você vai somar ou subtrair o valor negativo de B pela raiz quadrada do Δ e dividir por duas o valor de A. Ele lutava para manter seus experimentos longe da lava borbulhante.",
        question: "Na função 2X²+5X+3, onde Δ equivale a 1, quais os valores das raízes?",
        options: ["são -1 e -1,5.", "são 2 e -1.", "são 1 e 1.", "são -2 e -2,5."],
        correctAnswer: "são -1 e -1,5."
    },

    {
        story: "Avançando pelas entranhas incandescentes do vulcão, uma repentina explosão vulcânica lançou um mar de magma na sua direção, fazendo você pensar rapidamente: Uma das propriedades para derivar uma função diz: Em f(x) = X elevado a n a função derivada será f'(x) = n.X elevando a n-1, ou seja, você subtrai 1 do expoente e multiplica o seu valor original por X.",
        question: "Qual é o f'(x) derivada da função f(x) = 3X²+5X³?",
        options: ["f'(x) = 6X+15x².", "f'(x) = 6X+8x².", "f'(x) = 2X+35x².", "f'(x) = 3X+5x²."],
        correctAnswer: "f'(x) = 6X+15x²."
    },

    {
        story: "Já vendo a saída do vulcão, você sente uma sensação de perigo no ar, olhando ao seu redor você percebe um rabisco feitos às pressas em uma rocha. Uma das propriedades para derivar uma função diz: Em f(x) = X elevano n a função derivada será f'(x) = n.X elevando a n-1, ou seja, você subtrai 1 do expoente e multiplica o seu valor original por X.",
        question: "Qual é o f'(x) derivada da função f(x) = X⁶-2X²?",
        options: ["f'(x) = 5X⁵-41x.", "f'(x) = 16X⁵-42x.", "f'(x) = 56X⁵-43x.", "f'(x) = 6X⁵-4x."],
        correctAnswer: "f'(x) = 6X⁵-4x."
    }
];

const perguntasLabirinto = [
    {
        story: "Se aventurando pelos corredores do labirinto, você se depara com um comerciante ao virar em uma encruzilhada. Ele sorri ao vê-lo e o cumprimenta: Uma das propriedades para derivar uma função diz: Em f(x) = X elevado a n, a função derivada será f'(x) = n.X elevado a n-1, ou seja, você subtrai 1 do expoente e multiplica o seu valor original por X.",
        question: "Qual é o f'(x) derivada da função f(x) = X²-2X?",
        options: ["f'(x) = 2x-3x.", "f'(x) = 4x-4x^0.", "f'(x) = 2x-2x.", "f'(x) = 2x-2x^0."],
        correctAnswer: "f'(x) = 2x-2x^0."
    },

    {
        story: "Enquanto busca uma saída pelos corredores, seus olhos captam uma escrita na parede alertando sobre uma armadilha: Uma das propriedades para derivar uma função diz: Em f(x) = X elevado a  n a função derivada será f'(x) = n.X elevado a  n-1 , ou seja, você subtrai 1 do expoente e multiplica o seu valor original por X. Porém, já era tarde demais, seus pés já estavam sobre uma placa de pressão.",
        question: "Qual é o f'(x) derivada da função f(x) = X³+X²?",
        options: ["f'(x) = 1X²+3x.", "f'(x) = 7X²+1x.", "f'(x) = 6X²+8x.", "f'(x) = 3X²+2x."],
        correctAnswer: "f'(x) = 3X²+2x."
    },

    {
        story: "Enquanto caminhava pelos corredores sinuosos do labirinto, um som agudo e inquietante ecoou pelas passagens a sua frente: Uma das propriedades para derivar uma função diz: Em f(x) = C a função derivada será f'(x) = 0, ou seja, quando o valor está sozinho sem o X ele será igual a 0.",
        question: "Qual é o f'(x) derivada da função f(x) = 10?",
        options: ["f'(x) = 0.", "f'(x) = 10.", "f'(x) = 15.", "f'(x) = -1."],
        correctAnswer: "f'(x) = 0."
    },

    {
        story: "Explorando os corredores do labirinto, você se depara com uma figura oculta nas sombras, que ao perceber ter sido descoberta, declara um assalto: Uma das propriedades para derivar uma função diz: Em f(x) = C a função derivada será f'(x) = 0, ou seja, quando o valor está sozinho sem o X ele será igual a 0.",
        question: "Qual é o f'(x) derivada da função f(x) = 6?",
        options: ["f'(x) = 1.", "f'(x) = 12.", "f'(x) = 25.", "f'(x) = 0."],
        correctAnswer: "f'(x) = 0."
    },

    {
        story: "Explorando os corredores confusos do labirinto, você encontra um andarilho perdido no final de um corredor. Para obter informações, você se aproxima dele dizendo: Na função de 2º grau AX²+BX+C, para calcular o Δ você substitui os valores de A, B e C na fórmula B2²-4AC, subtraia do quadrado de B, a multiplicação de -4 por A e por C.",
        question: "Na função 3X²-6X+3, qual é o valor do Δ?",
        options: ["Δ é -1.", "Δ é 0.", "Δ é -3.", "Δ é 1."],
        correctAnswer: "Δ é 0."
    },

    {
        story: "Caminhando no labirinto, você escuta gritos desesperados ecoando pelos corredores: Na função de 2º grau AX²+BX+C, para calcular o Δ você substitui os valores de A, B e C na fórmula B²-4AC, subtraia do quadrado de B, a multiplicação de -4 por A e por C. Seguindo o som, você encontra uma pessoa presa em uma armadilha.",
        question: "Na função X²-2X+1, qual é o valor do Δ?",
        options: ["Δ é -1.", "Δ é 0.", "Δ é -3.", "Δ é 1."],
        correctAnswer: "Δ é 0."
    },

    {
        story: "À medida que avança mais fundo no labirinto, você chega a uma sala com o chão repleto de símbolos matemáticos: AX²+BX+C pode possuir até duas raízes, para achá-las basta usar a equação (x = (-B +- raiz de Δ) / (2 x A)), onde você vai somar ou subtrair o valor negativo de B pela raiz quadrada do Δ e dividir por duas o valor de A.",
        question: "Na função 2X²-7X+6, onde Δ equivale a 1, quais os valores das raízes?",
        options: ["são -1 e -1,5.", "são 2 e -1.", "são 1 e 1.", "são 2 e 1,5."],
        correctAnswer: "são 2 e 1,5."
    },

    {
        story: "Enquanto explorava os corredores do labirinto, você sente uma presença gélida ao seu redor. Progredindo silenciosamente, você avista um fantasma sussurrando: AX²+BX+C pode possuir até duas raízes, para achá-las basta usar a equação (x = (-B +- raiz de Δ) / (2 x A)), onde você vai somar ou subtrair o valor negativo de B pela raiz quadrada do Δ e dividir por duas o valor de A.",
        question: "Na função 2X²-4X+2, onde Δ equivale a 0, qual o valor da raiz?",
        options: ["É 4.", "É 6.", "É 2.", "É 1."],
        correctAnswer: "É 1."
    }
];

const perguntasCastelo = [
    {
        story: "Se aproximando ao fim do Covil Sem Limites, próximo a uma ponte de ossos, você observa um Lich amedrontador dando ordem aos seus servos esqueletos: Em f(x) = X elevado a n, a função derivada será f'(x) = n.X elevado a n-1 e em f(x) = C a função derivada será f'(x) = 0.",
        question: "Qual é o f'(x) derivada da função f(x) = 2X 6+3X 4 -8?",
        options: ["f'(x) = 12X⁵+12X³.", "f'(x) = 13X⁵+12X³.", "f'(x) = -12X⁵+12X³.", "f'(x) = -13X⁵+12X³."],
        correctAnswer: "f'(x) = 12X⁵+12X³."
    },

    {
        story: "Andando pela escuridão do covil, você escorrega em uma rocha coberta de musgo e cai, fazendo um barulho. Internamente, você reflete: Em f(x) = X elevado a n, a função derivada será f'(x) = n.X elevado a n-1 e em f(x) = C a função derivada será f'(x) = 0. O estrondo causado por sua queda desencadeia um desmoronamento acima de você.",
        question: "Qual é o f'(x) derivada da função f(x) = 3X⁶+2X⁵+11?",
        options: ["f'(x) = 19X⁵+11X⁴.", "f'(x) = 18X⁵+10X⁴.", "f'(x) = 17X⁵+9X⁴.", "f'(x) = 16X⁵+8X⁴."],
        correctAnswer: "f'(x) = 18X⁵+10X⁴."
    },

    {
        story: "Em um canto oculto do covil, você descobre uma cela e, acreditando ter encontrado a princesa você corre para libertá-la. No entanto, ao se aproximar, uma aldeã suplica por socorro: Em f(x) = X elevado a n, a função derivada será f'(x) = n.X elevado a n-1 e em f(x) = C a função derivada será f'(x) = 0.",
        question: "Qual é o f'(x) derivada da função f(x) = 2X⁵+2X⁴-7?",
        options: ["f'(x) = 10X⁴+8X³.", "f'(x) = 9X⁴+7X³.", "f'(x) = 8X⁴+6X³.", "f'(x) = -10X⁴+9X³."],
        correctAnswer: "f'(x) = 10X⁴+8X³."
    },

    {
        story: "Você avança com cautela pelo covil, atento a qualquer sinal de perigo. De repente, você nota uma figura caída no chão. Ao se aproximar, ela desaparece e reaparece atrás de você, sussurrando: Em f(x) = X elevado a n, a função derivada será f'(x) = n.X elevado a n-1 e em f(x) = C a função derivada será f'(x) = 0.",
        question: "Qual é o f'(x) derivada da função f(x) = 2X²+2X³+6?",
        options: ["f'(x) = 4X+6X².", "f'(x) = 6X+4X².", "f'(x) = -4X-6X².", "f'(x) = -4X+6X²."],
        correctAnswer: "f'(x) = 4X+6X²."
    }
];

const perguntasFinal = [
    {
        story: "Nas profundezas do Cóvil Sem Limites, atravessando por uma ponte de ossos sobre um lago de ácido, Dentro de uma cela escura e úmida, você encontra a princesa de Calculária, envolta em lágrimas silenciosas enquanto está encostada na parede. Assim que seus olhares se cruzam, a expressão da princesa se ilumina com um sorriso radiante de esperança. Ela te suplica em um sussurro desesperado para salvá-la.",
        question: "Qual é o f(x) da função 4X+2, quando X for 7?",
        options: ["f(x) = 1.", "f(x) = 12.", "f(x) = 25.", "f(x) = 30."],
        correctAnswer: "f(x) = 30."
    },

    {
        story: "Nas profundezas do Cóvil Sem Limites, atravessando por uma ponte de ossos sobre um lago de ácido, Dentro de uma cela escura e úmida, você encontra a princesa de Calculária, envolta em lágrimas silenciosas enquanto está encostada na parede. Assim que seus olhares se cruzam, a expressão da princesa se ilumina com um sorriso radiante de esperança. Ela te suplica em um sussurro desesperado para salvá-la.",
        question: "Na função 3X-21, qual é a sua raiz?",
        options: ["A raiz da função é 8.", "A raiz da função é 7.", "A raiz da função é 9.", "A raiz da função é 8."],
        correctAnswer: "A raiz da função é 7."
    },

    {
        story: "Nas profundezas do Cóvil Sem Limites, atravessando por uma ponte de ossos sobre um lago de ácido, Dentro de uma cela escura e úmida, você encontra a princesa de Calculária, envolta em lágrimas silenciosas enquanto está encostada na parede. Assim que seus olhares se cruzam, a expressão da princesa se ilumina com um sorriso radiante de esperança. Ela te suplica em um sussurro desesperado para salvá-la.",
        question: "Qual é o f(x) da função 6X/2, quando X for 3?",
        options: ["f(x) = 9.", "f(x) = 12.", "f(x) = 25.", "f(x) = 0."],
        correctAnswer: "f(x) = 9."
    },

    {
        story: "Nas profundezas do Cóvil Sem Limites, atravessando por uma ponte de ossos sobre um lago de ácido, Dentro de uma cela escura e úmida, você encontra a princesa de Calculária, envolta em lágrimas silenciosas enquanto está encostada na parede. Assim que seus olhares se cruzam, a expressão da princesa se ilumina com um sorriso radiante de esperança. Ela te suplica em um sussurro desesperado para salvá-la.",
        question: "Qual é o f(x) da função X²+3X-10, quando X for 5?",
        options: ["f(x) = 1.", "f(x) = 30.", "f(x) = 25.", "f(x) = 35."],
        correctAnswer: "f(x) = 30."
    }
];

export {perguntasInicio, perguntasPonte, perguntasFloresta, 
perguntasDeserto, perguntasVale, perguntasVulcao, perguntasLabirinto, 
perguntasCastelo, perguntasFinal};