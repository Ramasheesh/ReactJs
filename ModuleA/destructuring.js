/*
// array
let arr = [1,2,3];
arr.push(5);
console.table(arr);

// let a = arr[0];
// let b= arr[1];
// let c = arr[2];

// or we can define another way
let [a,b,c,d,e=20] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

*/

let obj = {
    name:"asheesh",
    country:"India",
    state:"Up",
}

// let {name,state} = obj;
let {name,state:city , country} = obj;


// console.log(name);
// // console.log(state);
// console.log(country);
// console.log(city);

// with nested obj
let obj2 = {
    name:"Ram",
    address:{
        country:"India",
        state:{
            city:"Mohali",
            pincode:12345,
        }
    }
}

let {address:{country:cd , state:{city:bc}}} = obj2;

console.log(cd);
console.log(bc);

let {address:{ state:{pincode}}} = obj2;
console.log(pincode);
