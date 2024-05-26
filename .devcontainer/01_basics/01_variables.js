const accoundId = 144553
let accountEmail = "navalrathore10@gmail.com"
var accoundPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accoundId = 2  //Not allowed

console.log(accoundId);
accoundPassword = "242424"
accoundCity = "Bangalore"
// accoundId = 221221
accountEmail = "navalrathore10@gmail.com"

/*
 Prefer not to use var ,
 instead use let or const 
 just because of block scope issue & functional scope.
*/ 

console.table([accoundId ,accountState, accountEmail,accoundPassword ,accountCity]);