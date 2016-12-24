function Popup(options) {
    var tip = document.createElement("div");
    var self = this;
    tip.classList.add('popup');
    tip.innerHTML = options.content;
    options.node.appendChild(tip);
    options.node.style = 'relative';

    function addPosition(position) {
        switch (position) {
            case'top':
                tip.style.bottom = "-100%";
                tip.style.left = 0;
                break;
            case'bottom':
                tip.style.top = "=100%";
                tip.style.right = 0;
                break;
        }
    }

    this.toggle = function () {
        tip.classList.toggle("active");
    };

    addPosition(options.position);
    options.node.addEventListener("click", this.toggle);
}


var el = new Popup({
    node: document.getElementById("text"),
    content: "This is a tip",
    position: "top"
});

  var el2 =  new Popup({
    node: document.getElementById("text"),
    content: "second tip",
    position: "bottom"
});



