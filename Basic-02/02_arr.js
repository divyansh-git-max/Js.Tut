const marvel_heros = ['Iron Man', "Thor", 'Hulk']
const DC_Heros= ['Batman', "Superman"] 
const arr1 = ['Batman','Superman']

// marvel_heros.push(DC_Heros) // merge the array in the array 
// console.log(marvel_heros)
  
// marvel_heros.concat(DC_Heros)
// console.log(marvel_heros);


// console.log(marvel_heros)

const all_new_heros = [... marvel_heros, ...DC_Heros]
console.log(all_new_heros);


const another_array = [1,2,3 , [4,5,6], 7 , [6,7], [4,5]]
const real_array = another_array.flat(Infinity)
console.log(real_array);
console.log(Array.isArray('Divyansh')) // -> false means it is not array vice - versa 

console.log(Array.from('Divyansh')); //-> will convert this into Array 
console.log(Array.from({name: 'Divyansh'})) // 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2,score3))