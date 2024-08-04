"use strict";
// create a function which take two input of same data type and return array with first is second and second is first
function swap(first, second) {
    return [second, first];
}
let ans1 = swap("abhishe", "kumar");
let ans2 = swap(1, 2);
let ans3 = swap(true, false);
console.log(ans1, ans2, ans3);
