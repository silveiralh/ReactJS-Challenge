// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

function filtrarArray(array, filtro) {
    var arrayResutado = array.filter(function (e) {
        return !filtro.includes(e);
    });
    return arrayResutado;
}
console.log(filtrarArray([5, 4, 3, 2, 5], [5, 3]));
