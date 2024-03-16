//array 

const myArr= [0,1,2,3,4,5] // index starts at 0 


const myHeros = ['iron man', 'hulk']
const myArr2 = new Array(1,2)
console.log(myArr[0])

myArr.push(5)
console.log(myArr)
console.log(myArr2);
myArr.pop(5)
console.log(myArr)

myArr.unshift(9)

console.log(myArr);

const newArr = myArr.join() // array -> string 

console.log(newArr);

//slice-> 
console.log('A ', myArr)

const myn1 = myArr.slice(1,3) // array that contains element of index 1 , 2

console.log(myn1)

console.log('B ',myArr);


// splice  ->   it removes the part from the array which is spliced


const myn2 = myArr.splice(1,3) 
 
console.log(myn2)
console.log(myArr)

