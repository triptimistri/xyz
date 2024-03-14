
const input = require("readline-sync");
let n = input.questionInt("enter the number = ");
let a = input.questionInt("enter the number = ");
var max = a;
var min=a;
for(i=2; i<=n; i++){
    let b = input.questionInt("enter the number = ");
    if(max>b){
        max=max;
    }else{
        max = b;
    }
    if(min<b){
        min = min;
    }else{
        min = b;
    }
}
console.log(max , min);





























