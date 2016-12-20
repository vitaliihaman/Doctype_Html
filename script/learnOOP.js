function Student(n, a) {
    this.name = n;     // public method
    var age = a;       // private method
    var CONST = 100;   // constant

    this.sayHello = function () {
        return "hello from " + this.name;
       // console.log("hello from " + this.name);
    };

    this.getAge = function () {
        console.log(age);
    };
    var self = this;
    this.calc = function () {
        return CONST - age;  // при таком обращении эти переменные
                             // как-бы глобальные для этой функции
                             // и обращаться к ним надо напрямую,
                             // а не как к свойству обьекта
    };
}
var alex = new Student("Alex", 25);
var ally = new Student("Ally",20);


