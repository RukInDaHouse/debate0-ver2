let distance = 550;

function change_color(elem, color) {
    elem.parentElement.style.background = color;
}

let count = 0;

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
        let div = document.createElement("div"),
            father = e.path[5];
            count = count + 100;
        div.classList = father.classList;
        div.style.left = father.offsetLeft + distance + "px";
        div.style.top = father.offsetTop + count + "px";

        let arrow_width = distance - father.offsetWidth;
        div.innerHTML =
            father.innerHTML +
            `<div class='arrow' style='left: ${-arrow_width}px;width:${arrow_width}px;'><div></div></div>`;
        document.body.append(div);
    }
});