// this keword for refrence to any object
// this keyword's value depends upon how it's called?

console.log("1: ",this);//globle call
function abc() {
  console.log("2: Now inside globle obj",this);
}
// abc();// function invocation (globle)
let obj = {
    name:"Asheesh",
    age:"450",
    defFun:function(){ // methed invocation
        // console.log("3: Now Inside object ",this);
        function klm(){
            console.log("4: ",this);
        }
        klm(); //function invocation
    },
    // test:function(){
    //     this.defFun();
    // }

}
 obj.defFun();// methed invocation
//  console.log("___________");

 let ghi = obj.defFun;
//  console.log("**********************************");

 ghi();// function invocation (globle)

// obj.test();