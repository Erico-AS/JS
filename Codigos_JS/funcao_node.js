function Média(x,y,z) {
    
    let L_c = z / y
    let preco = L_c * x
    
    return preco
}

const Preco_combustivel = parseFloat(("preco do combustivel"))
const Km_Litro = 20
const d = 100

console.log(Média(Preco_combustivel, Km_Litro, d).toFixed(2))