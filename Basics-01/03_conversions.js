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

