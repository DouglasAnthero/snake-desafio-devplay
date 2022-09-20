let esquerda = 37,
    cima = 38,
    direita = 39,
    baixo = 40,
    corpo = document.getElementById('corpo'),
    marginLeft = removePx(corpo.style.marginLeft),
    marginTop = removePx(corpo.style.marginTop);
var teclaPressionada = 0;

function movimento(tecla) {
    teclaPressionada = tecla.keyCode;

    if (teclaPressionada == '') return false;
    if (teclaPressionada < 37 || teclaPressionada > 40) return false;

    console.log(corpo.style.marginLeft);
    console.log(marginLeft);

    if (teclaPressionada == esquerda) {
        let i = 0;

        marginLeft = marginLeft - 50;
        corpo.style.marginLeft = marginLeft + "px";


        (function loopIt(i) {
            setTimeout(function () {
                if (teclaPressionada === 37) {
                    marginLeft = marginLeft - 50;
                    console.log(marginLeft, i, teclaPressionada, tecla.keyCode, "direita");
                    corpo.style.marginLeft = marginLeft + "px";
                    if (i < 24 && teclaPressionada === 37) loopIt(i + 1)
                };
            }, 500);
        })(i)

    } else if (teclaPressionada == cima) {
        let i = 0;

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



    } else if (teclaPressionada == direita) {
        let i = 0;

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



    } else if (teclaPressionada == baixo) {
        let i = 0;

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

    }

    //   corpo.style.marginLeft = marginLeft + "px";
    //   console.log(corpo.style.marginLeft);
}

function removePx(numero) {
    return Number(numero.replace("px", ""));
}


function pegaPonto() {

}

function posicao(elemento) {
    elemento.style.marginLeft = "0px";
    elemento.style.marginTop = "0px";
}

posicao(corpo);
document.onkeydown = movimento;