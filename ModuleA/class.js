class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    welcome(){
        console.log("hello",this.name);
    }
}
let person = new Person("Aman",452);
console.log(person);

class teacher extends Person{
    constructor(name,age,studentStrenth){
        super(name,age);
        this.studentStrenth = studentStrenth;
    }
}
let Teacher =new teacher("asheesh" ,22,1000 )
console.log('Teacher: ', Teacher);

class Student extends Person{
   constructor(name,age,cgpa){
    super(name,age);
    this.cgpa = cgpa;
   }
}

let student = new Student("Ram",488,6.59);
console.log('student: ', student);

student.welcome();
Teacher.welcome();
