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


function MyHtmlElement(tag, content, color) {
    this.tagName = tag;
    this.content = content || "here can be your content...";
    this.bgColor = color || "green";
    var width = "200px";
    var height = "100px";
    this.show = function () {
        var wrapper = document.getElementById("wrapper");
        var elem = document.createElement(this.tagName);
            elem.style.backgroundColor = this.bgColor;
            elem.innerHTML = this.content;
            if(this.tagName === "div"){
                elem.style.width = width;
                elem.style.height = height;
            }
        wrapper.appendChild(elem);
    }
}

var h1 = new MyHtmlElement("h1");
var div = new MyHtmlElement("div");