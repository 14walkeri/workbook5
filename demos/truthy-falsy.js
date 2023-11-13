"use strict";

let value;
value = "";
value= undefined;
value = null;
// value = "";
// value = undefined;
// value = null;


if (value == "" || value == undefined || value == null) {
  console.log(false);
}

if(!value){
 console.log(false);
}
if (!value) {
  console.log(false);
}

if (value) {
  console.log("do something with the value");
}

function isOver60(arrayValue){
  if (arrayValue > 60){
      return true;
} else {
  return false;
}
}

let numbers = [3, 5, 12, 32, 69, 58, 61]

let firstValOver60 = numbers.find(isOver60);
if (firstValOver60 = numbers.find(isOver60)) {
  console.log(firstValOver60);
}