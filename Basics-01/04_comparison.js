/*
comparison should be between the same datatypes 
 */
console.log(null > 0); // -> false
console.log(null == 0); // -> false  these type of comparison should be avoided (code should be clean)

/* 
comparisons convert null to a number treating it as 0 for >= and > , etc
not for equality operator ==
*/
console.log(undefined == 0); //-> false 
// === triple equal checks the datatype also 

console.log('2'=== 2);  