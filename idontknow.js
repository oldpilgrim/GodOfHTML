/* javascript? more like javas**t */

// false, because type checking
console.log(1 === "1");

// true, because no type checking
console.log(1 == "1");

// untyped array, ok
var arr = [1, "1"];
var brr = arr;

// but actually, it's more like a list
arr.push(2);

// [1, "1", 2], because arrays are reference types
console.log(brr);