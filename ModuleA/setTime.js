// setTime out is a asyncronous function
function yelo(){
    var a = 10;
    function cb(){
        console.log("Hello sir how are you");
    }
    setTimeout(cb,5000);
    console.log(a);
}
yelo();
