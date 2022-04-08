let a = []
let b = []
for (let i = 1; i <= 100;i++){
   if  ( i % 3 === 0){
       a.push(i)
   } 
   if ( i % 4 === 0){
       b.push(i)
   }
}
console.log(a)
console.log(b)