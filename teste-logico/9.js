// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function arraySplit(array, qtd) {
    var arrayResutado = []
    for (value of array) {
        var arraySplitado = arrayResutado[arrayResutado.length - 1];
        if (!arraySplitado || arraySplitado.length == qtd) {
            arrayResutado.push([value]);
        } else {
            arraySplitado.push(value);
        }
    }
    return arrayResutado;
}
console.log(arraySplit([1, 2, 3, 4, 5], 2));
