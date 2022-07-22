const Person = require("./person")

// class Student esta erdando todos os metodos da class Person
class Student extends Person {

    constructor(name, age, turma) {
        super(name, age)
        this.turma = turma
    }

    greetings(){
        console.log(`Olá, tudo bem? Meu nome é, ${this.name}, e tenho ${this.age} anos, estou na turma ${this.turma}`)
        // Colocando esse novo greetings eu subescrevo o greetings da class Person. E é ela que ira ser execultada porque chamei o Student
    }
}

module.exports = Student