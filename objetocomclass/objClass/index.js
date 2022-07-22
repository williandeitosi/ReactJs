const Person = require("./person")
const Student = require("./student")


let willian = new Student("Willian", 26, "001")
let rafaela = new Person("Rafaela", 20, "010")

willian.greetings()// por ela erdar nós conseguimos esse resultado de usar o greetings na class Student
rafaela.greetings()// chamei pelo Person
