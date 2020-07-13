let a = 12;
let b = 2;
let c = 11;
let res = 0;

if (a > b && a > c) {
    res = a;
} else
    if (b > c && b > a){
    res = b;
} else {
    res = c;
}

console.log(res)