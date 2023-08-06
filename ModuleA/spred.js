//spred operator with array

let arr1 = [1,2,3];
// let arr2 = arr1;
// let arr2 = [...arr1]; 
let arr2 = arr1.map(function(element){
    return element;
})

arr2[2] = 10;

console.log(arr1);
console.log(arr2);

//spred opretor with object
let  obj = {
    name:"RamAsheesh",
    address:{
        country:"USA",
        state:{
            citry:"",
            zipCode:12345,
        }
    }
}
//sello copy
// let obj2 = obj;
let obj2 = {...obj};
obj2.name ="Golu";

obj2.name = "harsh"
obj2.address ={
    country:"India",
    state:{
        city:"Mohali",
        zipCode:12345,
    }
}
obj2.address.country="Canada"
console.log(obj2.name);
console.log(obj2.address);

// deep copy
let obj3 = JSON.parse(JSON.stringify(obj));
obj3.address.country = "Japan";
obj2.address.country.state="Noida"
console.log(obj.address.country);
console.log(obj3.address.country);
