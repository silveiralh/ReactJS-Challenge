// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function removerAninhamentos(array) {
    var arrayResutado = array.flat();
    return arrayResutado;
}
console.log(removerAninhamentos([1, 2, [3], [4, 5]]));