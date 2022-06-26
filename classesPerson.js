// Write a “person” class to hold all the details.

class person {
    constructor (firstName, lastName, education, profession, experience){
      this. firstName = firstName;
      this. lastName = lastName;
      this. education = education;
      this. profession = profession;
      this. experience = experience;
      }
      getDetails () {
        return (`The name of the person is ${this.firstName} ${this.lastName}, he has completed ${this.education} and working has ${this.profession} with an experience of ${this.experience} years.`)
      }
  }
  let person1 = new person ("Ganesh", "Ravichandran", "B.E", "Software Engineer", 5);
  let person2 = new person ("Ganesh", "Karthik", "B.E", "SDE", 6);
  let person3 = new person ("Abilash", "Selvadurai", "MBA", "Manager", 4);
  let person4 = new person ("Abdul", "Rahman", "B.E", "Civil Engineer", 3);
  let person5 = new person ("Gokul", "Raj", "M.Com", "Accountant", 7);
  
  console.log(person1.getDetails());
  console.log(person2.getDetails());
  console.log(person3.getDetails());
  console.log(person4.getDetails());
  console.log(person5.getDetails());
  