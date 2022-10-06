let esquerda = 37,
	cima = 38,
	direita = 39,
	baixo = 40,
	corpo = document.getElementById('corpo'),
	ponto = document.getElementById('ponto'),
	marginLeft = removePx(corpo.style.marginLeft),
	marginTop = removePx(corpo.style.marginTop);

var l = document.getElementById('container').offsetWidth,
	a = document.getElementById('container').offsetHeight;

var teclaPressionada = 0,
	teclaAtivada = 0;

function movimento(tecla) {
	teclaPressionada = tecla.keyCode;

	if (teclaPressionada == '') return false;
	if (teclaPressionada < 37 || teclaPressionada > 40) return false;

	console.log(corpo.style.marginLeft);
	console.log(marginLeft);

	if (teclaPressionada == esquerda) {
		let i = 0;
		if (teclaAtivada !== teclaPressionada) {

			teclaAtivada = teclaPressionada;
			console.log(teclaAtivada, teclaPressionada);
			if (teclaAtivada !== direita) {
				marginLeft = marginLeft - 50;
				corpo.style.marginLeft = marginLeft + "px";


				(function loopIt(i) {
					setTimeout(function () {
						if (teclaPressionada === esquerda) {
							marginLeft = marginLeft - 50;
							corpo.style.marginLeft = marginLeft + "px";
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
			corpo.style.marginTop = marginTop + "px";

			(function loopIt(i) {
				setTimeout(function () {
					if (teclaPressionada === 38) {
						marginTop = marginTop - 50;
						console.log(marginTop, i, teclaPressionada, tecla.keyCode, "baixo");
						corpo.style.marginTop = marginTop + "px";
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
			corpo.style.marginLeft = marginLeft + "px";


			(function loopIt(i) {
				setTimeout(function () {
					if (teclaPressionada === 39) {
						marginLeft = marginLeft + 50;
						console.log(marginLeft, i, teclaPressionada, tecla.keyCode, "direita");
						corpo.style.marginLeft = marginLeft + "px";
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
			corpo.style.marginTop = marginTop + "px";

			(function loopIt(i) {
				setTimeout(function () {
					if (teclaPressionada === 40) {
						marginTop = marginTop + 50;
						console.log(marginTop, i, teclaPressionada, tecla.keyCode, "baixo");
						corpo.style.marginTop = marginTop + "px";
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

}

function pontoNasce(ponto) {

}


function posicao(elemento) {
	elemento.style.marginLeft = "0px";
	elemento.style.marginTop = "0px";
}

/*posicao(corpo);
document.onkeydown = movimento;*/
console.log(l, a);


/*let x =Math.ceil((((Math.random() * (1846 - 50) + 50))/5)*5);
let y = Math.round((((Math.random() * (490 - 50) + 50))/5)*5);

console.log(x, y);*/