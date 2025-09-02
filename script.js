const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após sair do consultório médico, você encontra uma tecnologia que pode diagnosticar doenças com base nos sintomas informados pelo paciente. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador! Como pode uma máquina diagnosticar sem entender o ser humano?",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso! A medicina nunca mais será a mesma com essa tecnologia.",
                afirmacao: "afirmação" 
            }
        ]
    },
    {
        enunciado: "Com a descoberta dessa tecnologia chamada Inteligência Artificial na medicina, um médico decide ensinar sobre essa tecnologia em suas aulas. Ao final de uma aula, ele pede que você escreva um trabalho sobre o impacto da IA na medicina. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Pesquiso sobre a IA na medicina e uso a tecnologia para encontrar dados e informações confiáveis para o trabalho.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escrevo o trabalho com base nas minhas próprias opiniões e o que sei sobre medicina, sem a ajuda de ferramentas digitais.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após o trabalho, o médico realiza um debate com a turma sobre como a tecnologia pode transformar a medicina no futuro. Qual é o seu ponto de vista?",
        alternativas: [
            {
                texto: "A IA pode criar novas possibilidades de tratamento e diagnósticos mais rápidos e precisos.",
                afirmacao: "afirmação"
            },
            {
                texto: "Me preocupo com a substituição de médicos humanos e o impacto disso nos cuidados de saúde.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar uma imagem que represente o futuro da medicina com o uso da IA. O que você faz?",
        alternativas: [
            {
                texto: "Crio uma imagem usando uma plataforma de design digital.",
                afirmacao: "afirmação"
            },
            {
                texto: "Crio uma imagem usando uma ferramenta geradora de imagens de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de biologia para entregar na próxima semana. Um colega decide utilizar a ajuda de uma IA para realizar a pesquisa e escrever o trabalho. No entanto, o trabalho ficou completamente igual ao que a IA gerou. O que você faz?",
        alternativas: [
            {
                texto: "Ajudar o colega a melhorar o trabalho e garantir que o conteúdo seja útil, mesmo que gerado por IA.",
                afirmacao: "afirmação"
            },
            {
                texto: "A tecnologia pode ser útil, mas é essencial revisar e adicionar perspectivas pessoais ao trabalho para torná-lo único.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O Futuro da Medicina...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
