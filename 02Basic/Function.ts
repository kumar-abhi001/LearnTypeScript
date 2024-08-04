type NumberArr = (number | string)[];
type returnType = number | string;

function getFirstItem(arr: NumberArr) {
    return arr[0];
}

let ans = getFirstItem([1, 2, 3]);

console.log(getFirstItem([1, 2, 3]));
console.log(getFirstItem(["Abhishe", "kumar", "amit"]));
