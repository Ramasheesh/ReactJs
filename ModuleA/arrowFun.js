// arrow function
// write a fun for sum two num


// normal function(regular function)
let sumFun = function(a,b){
    console.log(a+b);
}
sumFun(2,5);

// arrow function

let sum = (a,b)=>{
    console.log(a+b);
}
sum(2,1);
let thisD = ()=>{
    console.log(this);
}
thisD();