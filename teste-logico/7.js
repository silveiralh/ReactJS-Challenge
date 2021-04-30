// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function compararArrays(array1, array2) {
    return JSON.stringify(array1) == JSON.stringify(array2);
}
console.log(compararArrays([1, 2, 3, 4], [1, 2, 3, 4]));
