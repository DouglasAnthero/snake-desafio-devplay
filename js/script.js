let esquerda = 37,
	cima = 38,
	direita = 39,
	baixo = 40,
	cabeca = document.getElementById('cabeca'),
	ponto = document.getElementById('ponto'),
	marginLeft = removePx(cabeca.style.marginLeft),
	marginTop = removePx(cabeca.style.marginTop),
	qtdCorpo = 0,
	score = 0;


var teclaPressionada = 0,
	teclaAtivada = 0;

function movimento(tecla) {
	teclaPressionada = tecla.keyCode;

	if (teclaPressionada == '') return false;
	if (teclaPressionada < 37 || teclaPressionada > 40) return false;

	//console.log(cabeca.style.marginLeft);
	//console.log(marginLeft);

	if (teclaPressionada == esquerda) {
		let i = 0;
		if (teclaAtivada !== teclaPressionada) {

			teclaAtivada = teclaPressionada;
			//	console.log(teclaAtivada, teclaPressionada);
			if (teclaAtivada !== direita) {
				marginLeft = marginLeft - 50;
				cabeca.style.marginLeft = marginLeft + "px";


				(function loopIt(i) {
					setTimeout(function () {
						if (teclaPressionada === esquerda) {
							marginLeft = marginLeft - 50;
							cabeca.style.marginLeft = marginLeft + "px";
							pegaPonto();
							if (i < 24 && teclaPressionada === 37) loopIt(i + 1)
						};
					}, 500);
				})(i)
			};
		};
	} else if (teclaPressionada == cima) {
		let i = 0;
		if (teclaAtivada !== teclaPressionada) {

			teclaAtivada = teclaPressionada;
			marginTop = marginTop - 50;
			cabeca.style.marginTop = marginTop + "px";

			(function loopIt(i) {
				setTimeout(function () {
					if (teclaPressionada === 38) {
						marginTop = marginTop - 50;
						//	console.log(marginTop, i, teclaPressionada, tecla.keyCode, "baixo");
						cabeca.style.marginTop = marginTop + "px";
						pegaPonto();
						if (i < 24 && teclaPressionada === 38) loopIt(i + 1)
					};
				}, 500);
			})(i)
		};


	} else if (teclaPressionada == direita) {
		let i = 0;
		if (teclaAtivada !== teclaPressionada) {

			teclaAtivada = teclaPressionada;
			marginLeft = marginLeft + 50;
			cabeca.style.marginLeft = marginLeft + "px";


			(function loopIt(i) {
				setTimeout(function () {
					if (teclaPressionada === 39) {
						marginLeft = marginLeft + 50;
						//		console.log(marginLeft, i, teclaPressionada, tecla.keyCode, "direita");
						cabeca.style.marginLeft = marginLeft + "px";
						pegaPonto();
						if (i < 24 && teclaPressionada === 39) loopIt(i + 1)
					};
				}, 500);
			})(i)
		};


	} else if (teclaPressionada == baixo) {
		let i = 0;
		if (teclaAtivada !== teclaPressionada) {

			teclaAtivada = teclaPressionada;
			marginTop = marginTop + 50;
			cabeca.style.marginTop = marginTop + "px";

			(function loopIt(i) {
				setTimeout(function () {
					if (teclaPressionada === 40) {
						marginTop = marginTop + 50;
						//	console.log(marginTop, i, teclaPressionada, tecla.keyCode, "baixo");
						cabeca.style.marginTop = marginTop + "px";
						pegaPonto();
						if (i < 24 && teclaPressionada === 40) loopIt(i + 1)
					};
				}, 500);
			})(i)
		};
	};


}

function removePx(numero) {
	return Number(numero.replace("px", ""));
}


function pegaPonto() {
	let textScore = "";
	if (ponto.style.marginLeft === cabeca.style.marginLeft && ponto.style.marginTop === cabeca.style.marginTop) {
		score += 10;
		textScore = score.toString()
		document.getElementById('score').innerHTML = textScore;
		pontoNasce(ponto);
		cresceCobrinha();
	}
}

function pontoNasce(ponto) {
	let larguraTela = document.getElementById('container').offsetWidth,
		alturaTela = document.getElementById('container').offsetHeight,
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
	const corpo = cabeca.cloneNode(true);
	const container = document.getElementById('container');

	container.appendChild(corpo);
	/*posicaoCorpo = [
		{
			Eixo X: 200,
			Eixo Y: 200
		}
	];*/
	qtdCorpo += 1;
	corpo.id = `corpo${qtdCorpo}`;

	
	corpo.style.marginLeft = "0px";
	corpo.style.marginTop = "0px";




}

posicao(cabeca);
pontoNasce(ponto);
document.onkeydown = movimento;



