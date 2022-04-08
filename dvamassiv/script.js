let number2 = []
let number3 = []

let a = Number(prompt("Number1:"))
let b = Number(prompt("Number2:"))
let c = Number(prompt("Number3:"))
let d = Number(prompt("Number4:"))
let e = Number(prompt("Number5:"))
let f = Number(prompt("Number6:"))
let g = Number(prompt("Number7:"))


if ( a % 2 === 0  ) {
   number2.push(a)
} 
if ( a % 3 === 0 ) {
   number3.push(a)
}

if ( b % 2 === 0  ) {
   number2.push(b)
}
if ( b % 3 === 0 ) {
   number3.push(b)
}

if ( c % 2 === 0  ) {
   number2.push(c)
} 
if ( c % 3 === 0 ) {
   number3.push(c)
}

if ( d % 2 === 0  ) {
   number2.push(d)
}
if ( d % 3 === 0 ) {
   number3.push(d)
}

if ( e % 2 === 0  ) {
   number2.push(e)
} 
if ( e % 3 === 0 ) {
   number3.push(e)
}

if ( f % 2 === 0  ) {
   number2.push(f)
}
if ( f % 3 === 0 ) {
   number3.push(f)
}

if ( g % 2 === 0  ) {
   number2.push(g)
} 
if ( g % 3 === 0 ) {
   number3.push(g)
}

console.log("Числа кратны на 2" + "[" + number2 + "]")
console.log("Числа кратны на 3" + "[" + number3 + "]")
