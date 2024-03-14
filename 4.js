



const input = require("readline-sync");

let n = input.questionInt("enter the number = ");
let num = n;
let r=1;
let rev=0;

while( num>0 ){

    r = num%10;
    num = Math.floor(num/10);
    rev = rev * 10 +r;
}
if(rev==n){
console.log("yes");
}
else {
    console.log("no");
}



































