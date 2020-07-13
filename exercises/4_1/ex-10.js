let custo = 1;
let custoMaisImposto = custo * (1.2)
let venda = 125;

let lucroUnitario = venda - custoMaisImposto;

let lucroMilPecas = lucroUnitario * 1000

if (custo == 0|| venda == 0) {
    console.log('há erro nos preços');
} else {
console.log(lucroMilPecas.toFixed(2));
}