let distance = 250;

function change_color(elem, color) {
    elem.parentElement.style.background = color;
}

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
        let div = document.createElement("div"),
            father = e.path[5];
        div.classList = father.classList;
        div.style.left = father.offsetLeft + distance + "px";
        div.style.top = father.offsetTop + "px";

        let arrow_width = distance - father.offsetWidth;
        div.innerHTML =
            father.innerHTML +
            `<div class='arrow' style='left: ${-arrow_width}px;width:${arrow_width}px;'></div>`;
        document.body.append(div);
    }
});

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn2")) {
        var div = document.createElement("div");
        var father = e.path[3];
            col = document.getElementsByClassName('col')[4];
            col.appendChild(div);
        div.classList = father.classList;
        div.classList.remove("col");

        let arrow_width = distance - father.offsetWidth;
        div.innerHTML =
            father.innerHTML +
            `<div class='arrow' style='right: ${-arrow_width}px;width:${arrow_width}px;'></div>`;
    }
});