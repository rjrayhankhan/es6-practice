class Parent {
    constructor(){
        this.fatherName = "Rayhan";
    }
}

class Child  extends Parent{
     constructor(name){
         super();
         this.name = name;
     }
     getFullName(){
         return this.name + " " + this.fatherName;
     }
}

const baby = new Child("raisha");
const baby2 = new Child("nusaiba");
console.log(baby.getFullName());
console.log(baby2.getFullName());