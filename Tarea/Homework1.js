//Ejercicio #1 (Count Array Duplicates and return value and number of occurrences)
//const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]
function consecutiveCount(...elements){
  let current = null;
  let count = 0;
  for (let i = 0; i < elements.length; i++){
    if (elements [i]!=current){
      if(count>0){
      console.log(current+'-->'+count);
    }
    current = elements[i];
    count=1;
  }else{
    count++;
    }
  }
}
consecutiveCount("a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a");


//Ejercicio #2 (Flatten nested array)
var arrays = [1,[2,3],4,5,[6,[7]]];

function flat(data) {
  var r = []
  data.forEach(e => Array.isArray(e) ? r = r.concat(flat(e)) : r.push(e));
  return r;
}
console.log (flat(arrays));

//Ejercicio 
 //const array = ["bow", "crystal","organic","ally","rain","line"];

function compoundMatch(words,target){
  for (let i = 0; i <words.length; i++){
    for(let ii = 0;ii <words.length; ii++){
      const arr1 = words[i] + words[ii] === target
      const arr2 = words[ii] + words[i] === target
      if(i!==ii &&(arr1||arr2)){
        const arr = arr1 ? [i,ii] : [ii,i]
        return[words[i],words[ii], arr]
      }
    }
  }
  return null
}

console.log(compoundMatch(["bow", "crystal","organic","ally","rain","line"],"rainbow"));

//Ejercicio #4 (Elever cada digito de un numero al cuadrado y concatenar el resultado)
function squareDigits(n) {
  return +(n.toString().split('').map(val => val * val).join(''));
}
console.log(squareDigits(9119));

