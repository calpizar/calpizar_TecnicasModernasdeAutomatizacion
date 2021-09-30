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

//Ejercicio 3
function compoundMatch(words,target){

  const array = ["bow", "crystal","organic","ally","rain","line"];

  for (let i = 0; i <words.length; i++){
      if(target.includes(words[i])){
          arr1.push(words[i]);

      }
  }

  let part1;
  let part2;

  outer: for (let i = 0; i < arr.length; i++){

      if (target.includes(arr1[i])) {
          part1 = array[i];
          for (let j = 0; j < arr1.length; j++){
              if (target.replace(part1,) ===arr1[j]){
                  part2 = arr1[j];
                  break outer;
              }
          }
      }
}

if (part1 === undefined || part2 === undefined) {
  return null;

  }
  let indexes = part1 + part2 === target ? 
  [words.indexOf(part1), words.indexOf(part2)] : [words.indexOf(part2), words.indexOf(part1)];
  console.log([part1, part2, indexes]);
}
compoundMatch(["bow", "crystal","organic","ally","rain","line"]);

//Ejercicio #4 (Elever cada digito de un numero al cuadrado y concatenar el resultado)
function squareDigits(n) {
  return +(n.toString().split('').map(val => val * val).join(''));
}
console.log(squareDigits(9119));

