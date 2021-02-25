let distance = 250;

function change_color(elem, color) {
    elem.parentElement.style.background = color;
}

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("lvl1")) {
        var div = document.createElement("div");
        var father = e.path[5];
        var col = document.getElementsByClassName('col')[8];
		var content = col.getElementsByClassName('content')[0];
			content.appendChild(div);
        	div.classList = father.classList;


        let arrow_width = distance - father.offsetWidth;
        div.innerHTML =
            father.innerHTML +
            `<div class='arrow' style='right: ${-arrow_width}px;width:${arrow_width}px;'><div></div></div>`;
        
        var lvl = div.getElementsByClassName('lvl1')[0];
			lvl.classList.add("lvl2right");
			lvl.classList.add("lvl2");
			lvl.classList.remove("lvl1right");
			lvl.classList.remove("lvl2");
			div.classList.remove("col");

    }
});

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("lvl1right")) {
        var div = document.createElement("div");
        var father = e.path[5];
        var col = document.getElementsByClassName('col')[12];
		var content = col.getElementsByClassName('content')[0];
			content.appendChild(div);
        	div.classList = father.classList;

        let arrow_width = distance - father.offsetWidth;
        div.innerHTML =
            father.innerHTML +
            `<div class='arrow' style='right: ${-arrow_width}px;width:${arrow_width}px;'><div></div></div>`;
        
        var lvl = div.getElementsByClassName('lvl1')[0];
            lvl.classList.add("lvl2right");
			lvl.classList.add("lvl2");
            lvl.classList.remove("lvl1right");
			lvl.classList.remove("lvl2");
            div.classList.remove("col");
			
		var card = div.getElementsByClassName('card')[0];
            card.classList.add("purple");
            card.classList.remove("blue");
    }
});
