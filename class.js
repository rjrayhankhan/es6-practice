class Student{
      constructor(sId, sName){
           this.id = sId;
           this.name = sName;
           this.school = "borkjk polytechnic"
      }
}
const student1 = new Student(12, "Rayhan");
const student2 = new Student(22, "rahad");
console.log(student1.name, student2.name);