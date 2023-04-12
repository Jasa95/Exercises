"use strict";

let count = 0;
const arr = [];

const intervalId = setInterval(function () {
  count++;
  arr.unshift(count);
  if (arr.length > 9) {
    arr.length = 9;
  }
  console.log(arr);
  if (arr[0] === 50) {
    clearInterval(intervalId);
    console.log("Tælleren er stoppet");
  }
}, 1000);
