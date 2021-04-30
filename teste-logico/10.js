// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function encontrarIguais(array1, array2){
    var valoresIguais=[];
    for ( i = 0; i < array1.length; i++) {
        for ( j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                valoresIguais.push(array1[i]);
            }
        }
    }
    return valoresIguais;
}
console.log(encontrarIguais([6, 8], [8, 9]));