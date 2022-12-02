const esquerda = 37;
const cima = 38;
const direita = 39;
const baixo = 40;
const body = document.querySelector('body');
const ponto = document.getElementById('ponto');
const containerJogo = document.getElementById('container-jogo');
let corpo = [document.getElementById('corpo0')];
let marginLeft = removePx(corpo[0].style.marginLeft);
let marginTop = removePx(corpo[0].style.marginTop);
let score = 0;
let teclaPressionada = 0;
let repeteMovimento = '';
let teclaAtivada = 0;
let larguraContainer = body.offsetWidth;
let alturaContainer = body.offsetHeight - 50;
let nivel = 1;

containerJogo.style.height = alturaContainer + 'px';

console.log(body.offsetWidth, body.offsetHeight, containerJogo.style.height, containerJogo.style.width);

function movimento(tecla) {
	teclaPressionada = tecla.keyCode;
	if (teclaPressionada == '') return false;
	if (teclaPressionada < 37 || teclaPressionada > 40) return false;

	if (teclaPressionada == esquerda) {
		if (teclaAtivada !== direita && teclaAtivada !== esquerda) {
			teclaAtivada = teclaPressionada;
			marginLeft = marginLeft - 50;
			movimentaCorpo();
			corpo[0].style.marginLeft = marginLeft + "px";
			limpaMovimento();
			repeteMovimento = setInterval(() => {
				marginLeft = marginLeft - 50;
				movimentaCorpo();
				corpo[0].style.marginLeft = marginLeft + "px";
				pegaPonto();
			}, 500 / nivel);
		};

	} else if (teclaPressionada == cima) {
		if (teclaAtivada !== baixo && teclaAtivada !== cima) {

			teclaAtivada = teclaPressionada;
			marginTop = marginTop - 50;
			movimentaCorpo();
			corpo[0].style.marginTop = marginTop + "px";
			limpaMovimento();
			repeteMovimento = setInterval(() => {
				marginTop = marginTop - 50;
				movimentaCorpo();
				corpo[0].style.marginTop = marginTop + "px";
				pegaPonto();
			}, 500 / nivel);
		};

	} else if (teclaPressionada == direita) {
		if (teclaAtivada !== esquerda && teclaAtivada !== direita) {
			teclaAtivada = teclaPressionada;
			marginLeft = marginLeft + 50;
			movimentaCorpo();
			corpo[0].style.marginLeft = marginLeft + "px";
			limpaMovimento();
			repeteMovimento = setInterval(() => {
				marginLeft = marginLeft + 50;
				movimentaCorpo();
				corpo[0].style.marginLeft = marginLeft + "px";
				pegaPonto();
			}, 500 / nivel)
		};

	} else if (teclaPressionada == baixo) {
		if (teclaAtivada !== cima && teclaAtivada !== baixo) {

			teclaAtivada = teclaPressionada;
			marginTop = marginTop + 50;
			movimentaCorpo();
			corpo[0].style.marginTop = marginTop + "px";
			limpaMovimento();
			repeteMovimento = setInterval(() => {
				marginTop = marginTop + 50;
				movimentaCorpo();
				corpo[0].style.marginTop = marginTop + "px";
				pegaPonto();
			}, 500 / nivel);
		};
	};
}

function removePx(numero) {
	return Number(numero.replace("px", ""));
}

function pegaPonto() {
	let textScore = "";
	if (ponto.style.marginLeft === corpo[0].style.marginLeft && ponto.style.marginTop === corpo[0].style.marginTop) {
		score += 50;
		textScore = score.toString();
		document.getElementById('score').innerHTML = textScore;
		pontoNasce(ponto);
		cresceCobrinha();
		if (score % 100 === 0) {
			nivel++;
		}
	}
}

function pontoNasce(ponto) {

	let randomX = Math.random() * (larguraContainer - 150) + 50;
	let randomY = Math.random() * (alturaContainer - 150) + 50;
	let x = Math.round(randomX / 50) * 50;
	let y = Math.round(randomY / 50) * 50;
	ponto.style.marginLeft = x + "px";
	ponto.style.marginTop = y + "px";

	console.log(ponto.style.marginLeft, ponto.style.marginTop);
}

function posicao(elemento) {
	elemento.style.marginLeft = "0px";
	elemento.style.marginTop = "0px";
}

function cresceCobrinha() {
	corpo.push(corpo[0].cloneNode(true));

	for (i = 1; i < corpo.length; i++) {
		containerJogo.appendChild(corpo[i]);
		corpo[i].id = `corpo${i}`;
	};
}

function movimentaCorpo() {
	for (i = corpo.length - 1; i > 0; i--) {
		corpo[i].style.marginLeft = corpo[i - 1].style.marginLeft;
		corpo[i].style.marginTop = corpo[i - 1].style.marginTop;
	}
}

function limpaMovimento() {
	clearInterval(repeteMovimento);
};

function morreCobrinha() {
	for (i = corpo.length - 1; i > 0; i--) {
		if (corpo[0].style.marginLeft === corpo[i - 1].style.marginLeft &&
			corpo[0].style.marginTop === corpo[i - 1].style.marginTop) {
			limpaMovimento();
			console.log('Você Morreu');
		}
	}
}


cresceCobrinha()
cresceCobrinha()
posicao(corpo[0]);
pontoNasce(ponto);
document.onkeydown = movimento;



