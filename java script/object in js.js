let obj = new Object();
obj.id = 1;
obj.name = 'arnim';
obj.branch = 'cse-ai'
console.log(obj)

const person = {
    firstName: "John",
    lastName: "Doe",
    info: function () {
        return "welcome Mr./Ms." + this.firstName + " " + "your branch is  " + this.lastName;
    },
  };
console.log(person.info())

let obj2 = {
    id:1,
    name:"arnim",
    address:{
        house_no:123,
        street_no:"manpur",
        city:"moradabad"
    }
};
console.log(obj2)