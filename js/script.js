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
    if (e.target.classList.contains("lvl1")) {
        var div = document.createElement("div");
        var father = e.path[5];
            col = document.getElementsByClassName('col')[8];
            col.appendChild(div);
        div.classList = father.classList;


        let arrow_width = distance - father.offsetWidth;
        div.innerHTML =
            father.innerHTML +
            `<div class='arrow' style='right: ${-arrow_width}px;width:${arrow_width}px;'><div></div></div>`;
        
            var lvl = div.getElementsByClassName('lvl1')[0];
            lvl.classList.add("lvl2");
            lvl.classList.remove("lvl1");
            div.classList.remove("col");
    }
});

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("lvl2")) {
        var div = document.createElement("div");
        var father = e.path[5];
            col = document.getElementsByClassName('col')[6];
            col.appendChild(div);
        div.classList = father.classList;


        let arrow_width = distance - father.offsetWidth;
        div.innerHTML =
            father.innerHTML +
            `<div class='arrow' style='right: ${-arrow_width}px;width:${arrow_width}px;'></div>`;
        
            var lvl = div.getElementsByClassName('lvl2')[0];
            lvl.classList.add("lvl3");
            lvl.classList.remove("lvl2");
            div.classList.remove("col");
                    div.style.top = father.offsetTop + 250 + "px";

    }
});
