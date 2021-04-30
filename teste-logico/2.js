// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function inverterArray(array) {
    var arrayResutado = [];
    for (var i = array.length-1; i >= 0; i--) {
        arrayResutado.push(array[i]);
    }
    return arrayResutado;
}
console.log(inverterArray([1,2,3,4]));
