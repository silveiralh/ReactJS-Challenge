// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function criarArray(qtd, valor) {
    return Array(qtd).fill(valor);
}
console.log(criarArray(3,"a"));