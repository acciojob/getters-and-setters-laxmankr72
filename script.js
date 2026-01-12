//complete this codehttps://www.svgrepo.com/show/345221/three-dots.svg
class Person {
	construcor(name,age){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name;
	}
	set age(value){
		this._age = value;
	}
}

class Student extends Person {
	constuctor(name,age){
		super(name,age);
		this.name=name;
		this.age=age;
	}
	study(){
		console.log(`${this.name} is studing`);
	}
}

class Teacher extends Person {
	constuctor(name,age){
		super(name,age);
		this.name=name;
		this.age=age;
	}
	teach(){
		
		console.log(`${this.name} is teaching`);
	}
}

let s1 = new Student("Amit", 20);
let s2 = new Teacher("Aman", 25);
s2.age= 30;

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
