let arr1 =[5,6,7,8,1,4,3,5,6,7,2]

// remove duplicates from array
let outputArr = [...new Set(arr1)]
console.log(outputArr);

// sum of largest nos in array

let sortedArr = arr1.sort((a,b)=>b-a)
let sum = arr1[0]+arr1[1]
console.log(sum)

// reverse string

let str1 = "Hello";
let revstr = ((str1.split("")).reverse()).join("");
console.log(revstr)

function hello() {
    var a = b = 5; // b=5; var a = b;
  };
  hello()
  
  console.log(b); // accidental global variable

  let arr = [6,4,3,7,4,8,9]

  let arr2 = arr;

  arr = []  // new blank array created & assigned so original array remains same
arr.length = 0 // original array changes
arr.splice(0,arr.length)  // original array changes
  console.log(arr)
  console.log(arr2)

