const esquerda = 37;
const cima = 38;
const direita = 39;
const baixo = 40;
const ponto = document.getElementById('ponto');
let corpo = [document.getElementById('corpo0')];
let marginLeft = removePx(corpo[0].style.marginLeft);
let marginTop = removePx(corpo[0].style.marginTop);
let score = 0;
let repeteMovimento = '';
let teclaPressionada = 0;
let teclaAtivada = 0;

function movimento(tecla) {
	teclaPressionada = tecla.keyCode;

	if (teclaPressionada == '') return false;
	if (teclaPressionada < 37 || teclaPressionada > 40) return false;

	if (teclaPressionada == esquerda) {
		let i = 0;
		if (teclaAtivada !== direita) {

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
			}, 500);
		};
	} else if (teclaPressionada == cima) {
		let i = 0;
		if (teclaAtivada !== baixo) {

			teclaAtivada = teclaPressionada;
			marginTop = marginTop - 50;
			movimentaCorpo();
			corpo[0].style.marginTop = marginTop + "px";
			limpaMovimento();
			morreCobrinha()
			repeteMovimento = setInterval(() => {
				marginTop = marginTop - 50;
				movimentaCorpo();
				corpo[0].style.marginTop = marginTop + "px";
				pegaPonto();
			}, 500);
		};


	} else if (teclaPressionada == direita) {
		let i = 0;
		if (teclaAtivada !== esquerda) {
			console.log(teclaAtivada);
			teclaAtivada = teclaPressionada;
			console.log(teclaAtivada, teclaPressionada);
			marginLeft = marginLeft + 50;
			movimentaCorpo();
			morreCobrinha()
			corpo[0].style.marginLeft = marginLeft + "px";
			limpaMovimento();
			repeteMovimento = setInterval(() => {
				marginLeft = marginLeft + 50;
				movimentaCorpo();
				corpo[0].style.marginLeft = marginLeft + "px";
				pegaPonto();
			}, 500)
		};


	} else if (teclaPressionada == baixo) {
		let i = 0;
		if (teclaAtivada !== cima) {

			teclaAtivada = teclaPressionada;
			marginTop = marginTop + 50;
			movimentaCorpo();
			morreCobrinha()
			corpo[0].style.marginTop = marginTop + "px";
			limpaMovimento();
			repeteMovimento = setInterval(() => {
				marginTop = marginTop + 50;
				movimentaCorpo();
				corpo[0].style.marginTop = marginTop + "px";
				pegaPonto();
			}, 500);
		};
	};
}

function removePx(numero) {
	return Number(numero.replace("px", ""));
}

function pegaPonto() {
	let textScore = "";
	if (ponto.style.marginLeft === corpo[0].style.marginLeft && ponto.style.marginTop === corpo[0].style.marginTop) {
		score += 10;
		textScore = score.toString()
		document.getElementById('score').innerHTML = textScore;
		pontoNasce(ponto);
		cresceCobrinha();
	}
}

function pontoNasce(ponto) {
	let larguraTela = document.getElementById('container').offsetWidth;
	let alturaTela = document.getElementById('container').offsetHeight;
	randomX = Math.random() * (1846 - 50) + 50,
		randomY = Math.random() * (495 - 50) + 50,
		x = Math.round(randomX / 50) * 50,
		y = Math.round(randomY / 50) * 50;
	ponto.style.marginLeft = x + "px";
	ponto.style.marginTop = y + "px";
}

function posicao(elemento) {
	elemento.style.marginLeft = "0px";
	elemento.style.marginTop = "0px";
}

function cresceCobrinha() {
	corpo.push(corpo[0].cloneNode(true));
	const container = document.getElementById('container');

	for (i = 1; i < corpo.length; i++) {
		container.appendChild(corpo[i]);
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
cresceCobrinha()
posicao(corpo[0]);
pontoNasce(ponto);
document.onkeydown = movimento;



