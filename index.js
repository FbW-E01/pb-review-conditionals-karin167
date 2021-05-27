//1
let randomNumber = Math.floor(Math.random(-10) *10);
// console.log(randomNumber);
//2
// if (randomNumber > 0) {
//     console.log('ye')
// } else{
//     console.log('no');
// }

// console.log(randomNumber);
//3

if (randomNumber > 5){
    console.log("Winner")
} else if (randomNumber > 0){
    console.log('ok')
} else {
    console.log('try again!');
}
//4 
let randomNumber2 = Math.floor(Math.random(-10) *10);
//5
if(randomNumber && randomNumber2  > 5){
    console.log("Good scores!");
} else {
   console.log('nope') ;
}
//6
if(randomNumber || randomNumber2  < -9){
    console.log("Minus nine!");
} else {
    console.log('nope2');
}
//7
let storeAMessage= [];
let x = randomNumber + randomNumber2;
if (x < 1) {
    storeAMessage.push("We have gone sub zero!");
} 
console.log(storeAMessage);
