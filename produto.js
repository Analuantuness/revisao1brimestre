const produto = {
    item:"iPad",
    marca: "Apple",
    preço: 7.000,
    descrição: "O iPad é uma versão do tablet da Apple lançada em 21 de março de 2017.",
    categoria: "Dispositivo Móvel" 
};
const exibirElement = document.querySelector('#exibir');
const resultado = document.querySelector('#resultado');

exibirElement.addEventListener('click', function(){

    for (let propriedades in produto){
        const paragrafo = document.createElement("p");
        paragrafo.appendChild(texto);
    }
});