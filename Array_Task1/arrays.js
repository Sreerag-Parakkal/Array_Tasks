const r=require("readline-sync");
let arr=[];

let size = r.questionInt("Enter array size");

console.log("Enter array elements ");

for(let i=0; i<size; i++){
    arr[i] = r.questionInt();
}
console.log(arr);
