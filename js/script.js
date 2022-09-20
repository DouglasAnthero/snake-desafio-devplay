let esquerda = 37,
    cima = 38,
    direita = 39,
    baixo = 40,
    corpo = document.getElementById('corpo'),
    marginLeft = removePx(corpo.style.marginLeft),
    marginTop = removePx(corpo.style.marginTop);

function movimento(tecla) {
    let teclaPressionada = tecla.keyCode;

    if (teclaPressionada == '') return false;
    if (teclaPressionada < 37 || teclaPressionada > 40) return false;

    console.log(corpo.style.marginLeft);
    console.log(marginLeft);

    if (teclaPressionada == esquerda) {
        console.log('esquerda');
        corpo.style.marginLeft = "-80px";
    } else if (teclaPressionada == cima) {
        console.log('cima');
        //      corpo.style.marginTop = "-80px";
    } else if (teclaPressionada == direita) {
        while (teclaPressionada == direita && marginLeft < 1200) {
            marginLeft = marginLeft + 50;
        }
    } else if (teclaPressionada == baixo) {
        console.log('baixo');
        //     corpo.style.marginTop = "80px";
    }

    corpo.style.marginLeft = marginLeft + "px";
    console.log(corpo.style.marginLeft);
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