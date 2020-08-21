/** Array Fundamental */


let arr = [1, 2, 3];
let arr = ["A", "B", "C"];
let arr = [1.1, 2.2, 3.3];

let arr = [1, "A", 3.14, true];


let arr = [1, "A", 3.14, true, () => {}, 11, function () {}];

let arr = ["a", "b", "c", "d", "e"];
let firstItem = arr[0]; 
let anyItem = arr[3]; 


let arr = ["a", "b", "c", "d", "e"];
for (let i = 0; i < arr.length; i++) {
  const abc = arr[i];
  console.log(abc); 
}


let arr = ["a", "b", "c", "d", "e"];

arr.push("f");

arr.pop();

arr[0] = "z";


let arr = ["a", "b", "c", "d", "e"]; 
arr.splice(2, 0, "R");



arr.splice(3, 3);


let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  const abc = arr[i];
  console.log(abc);
}