function MyHtmlElement(tag, content, color) {
    this.tagName = tag;
    this.content = content || "here can be your content...";
    this.bgColor = color || "green";
    var width = "200px";
    var height = "100px";
    var wrapper = document.getElementById("wrapper");
    var elem = document.createElement(this.tagName);
    this.show = function () {
        elem.style.backgroundColor = this.bgColor;
        elem.innerHTML = this.content;
        if(this.tagName === "div"){
            elem.style.width = width;
            elem.style.height = height;
        }
        wrapper.appendChild(elem);
    };
    this.remove = function () {
        wrapper.removeChild(elem);
    }
}

var h1 = new MyHtmlElement("h1");
var div = new MyHtmlElement("div");