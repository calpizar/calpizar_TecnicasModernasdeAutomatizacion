//Ejercicio #1 (Count Array Duplicates and return value and number of occurrences)
const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]
const counts = {};
arr.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts)

//Ejercicio #2 (Flatten nested array)
var arrays = [1,[2,3],4,5,[6,[7]]];

function flat(data) {
  var r = []
  data.forEach(e => Array.isArray(e) ? r = r.concat(flat(e)) : r.push(e));
  return r;
}
console.log (flat(arrays));


//Ejercicio #4 (Elever cada digito de un numero al cuadrado y concatenar el resultado)
function squareDigits(n) {
  return +(n.toString().split('').map(val => val * val).join(''));
}
console.log(squareDigits(9119));

