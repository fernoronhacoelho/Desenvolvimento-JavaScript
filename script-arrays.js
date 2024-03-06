//arrays
var meu_array = [1,2,3,"texto", true, false, [1,2,3]]

console.log(meu_array[6][1])

meu_array.push("novo valor")
console.log(meu_array)

var dado_removido = meu_array.pop()

console.log(meu_array)

console.log(dado_removido)

var posicao = meu_array.indexOf("texto")

var meu_array1 = ['cavalo', 'alface', 'bola']

meu_array1.sort()
console.log(meu_array1)

var meu_array2 = [55, 12, 22, 1, 11, 99, 9]
meu_array2.sort((a,b) => a-b);
console.log(meu_array2)