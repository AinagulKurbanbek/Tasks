let myArray = [23, 72, 35, 62, 75, 25];

let b = Number(prompt("Enter the numbers:"));

while (b !== 0) {
    if (myArray.includes(b))  {
        alert("Yes");
    }else {
        alert("No");
    }
    b = Number(prompt("Enter"))
}
  console.log(b)




//  while ( b !== 0) {
//       for ( let i = 0; i< myArray.length; i++){
//       let  found = false
//           if (b === myArray[i]){
//              found = true  
//           }
//       }  if (found) {
//           console.log("Yes")
//       }else {
//           console.log("No")
//       }
//       b = Number(prompt("Enter"))
//  }
   

//  let c = confirm()
//  console.log(c)