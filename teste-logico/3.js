// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function limparArray(array) {
    var arrayResutado = [];
     for (i = 0; i < array.length; i++) {
        if (!array[i] === false || !array[i] === undefined || !array[i] === '' || !array[i] === 0 || !array[i] === null) {
            arrayResutado.push(array[i]);
        }
     }
    return arrayResutado;
}
console.log(limparArray([0,1,2,'', undefined]));

