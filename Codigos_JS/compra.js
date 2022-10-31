var formaPagamento = 4
const precoEtiqueta = 100

/*
1 - 10% desconto
2- 50% desconto
3- 2x preco normal
4- '2x >' juros de 10%
*/

function desconto(x,y) {
    if (x == 1) {
        y -= y * 10 / 100
        console.log("O valor a pagar é " + y)
    }

    else if (x == 2){
        y -= y * 50 / 100
        console.log("O valor a pagar é " + y)
    }

    else if (x == 3){
        y = y / 2
        console.log("O valor a pagar serão 2 parcelas de " + y)
    }
    
    else{
        yd = y * 10 / 100
        console.log("O valor a pagar serão 2 parcelas de " + (yd + y)/2  + " totalizando \n" + yd)
    }
}

desconto(formaPagamento, precoEtiqueta)