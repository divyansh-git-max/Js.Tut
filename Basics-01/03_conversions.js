let score = '22'
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

let a = '32ab'

console.log(typeof a)

let aN = Number(a)
console.log(typeof aN)
console.log(aN) // '32ab'-> NaN 

let b = null

let bN = Number(b)
console.log(typeof bN)
console.log(bN) //Number(null) -> 0

let c = undefined

let cN = Number(c)
console.log(typeof cN)
console.log(cN) // -> NaN

let bool = true

let boolN = Number(bool)

console.log(typeof boolN)
console.log(boolN) //true -> 1 false -> 0

let isLoggedIn = 1
let boolisLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolisLoggedIn)
console.log(boolisLoggedIn) // 1 is converted in bool that is true vice-versa

// same for string if empty string converted into boolean it will show false (0)

let someNumber = 21
let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber) // Number is converted into String

let value = 3
let negativeValue = -value
console.log(negativeValue); //-> value is converted into negative value


// adding strings

let str1 = 'hello'
let str2 = 'divyansh'

let str3 = str1 + str2

console.log(str3);

console.log('1'+2+2) //122 the value that comes first then whole output is in that type like in this example string
console.log(1+2+'2') //32 

console.log(+true) //-> 1  increment of true
console.log(+'') //-> 0 increment of empty string 

