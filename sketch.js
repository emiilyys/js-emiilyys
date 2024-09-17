let campoIdade;
let campoFantasia;
let campoAventura;
let campoComedia; 
let campoDrama;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("0");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoComedia = createCheckbox("Gosta de comédia?");
  campoDrama = createCheckbox("Gosta de drama?");
}

function draw() {
  background("blue");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeComedia = campoComedia.checked(); 
  let gostaDeDrama = campoDrama.checked(); 
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeComedia, gostaDeDrama);

  fill(color(88, 0, 0));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeComedia, gostaDeDrama) {
  if (idade >= 16) {
    if (gostaDeDrama) {
      return "Parasita";
    } else {
      return "Tudo em Todo o Lugar ao Mesmo Tempo";
    }
  } else if (idade >= 14) {
    if (gostaDeComedia) {
      return "O Pior Vizinho do Mundo";
    } else {
      return "Brilho Eterno de uma Mente sem Lembranças";
    }
  } else if (idade >= 10) {
    if (gostaDeFantasia) {
      return "Divertida Mente 2";
    } else {
      return "Edward Mãos de Tesoura";
    }
  } else if (idade >= 10) {
    if (gostaDeAventura) {
      return "O Castelo Animado";
    } else {
      return "A Viagem de Chihiro";
    }
  }
  return "Nenhuma recomendação disponível";
}