function car(Name,color,Model) {
    this.name = Name;
    this.color = color;
    this.model = Model;
    this.test=function(){
        console.log(`I'm driving ${this.name}`);
    }
}
/*ES2015
class car {
    constructor(Name, color, Model) {
        this.name = Name;
        this.color = color;
        this.model = Model;
        this.test = function () {
            console.log(`I'm driving ${this.name}`);
        };
    }
}*/
let car1 = new car("maruti","red","2023");
console.log(car1);
car1.test();

let car2 = new car("bmw","white","x5");
console.log(car2);
car2.test();