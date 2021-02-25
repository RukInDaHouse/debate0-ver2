let distance = 250;

function change_color(elem, color) {
    elem.parentElement.style.background = color;
}

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("lvl1blue")) {
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
        
        var btn_upper = div.getElementsByClassName('btn2')[0];
			btn_upper.classList.add("lvl2purple");
			btn_upper.classList.remove("lvl1purple");
		var btn_lower = div.getElementsByClassName('btn2')[1];
			btn_lower.classList.add("lvl2blue");
			btn_lower.classList.remove("lvl1blue");
		
		div.classList.remove("col");

    }
});

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("lvl1purple")) {
        var div = document.createElement("div");
        var father = e.path[5];
        var col = document.getElementsByClassName('col')[12];
		var content = col.getElementsByClassName('content')[0];
			content.appendChild(div);
        	div.classList = father.classList;

		var color = div.getElementsByClassName("card")[0];
			
        let arrow_width = distance - father.offsetWidth;
        div.innerHTML =
            father.innerHTML +
            `<div class='arrow' style='right: ${-arrow_width}px;width:${arrow_width}px;'><div></div></div>`;
        
		var btn_upper = div.getElementsByClassName('btn2')[0];
			btn_upper.classList.add("lvl2purple");
			btn_upper.classList.remove("lvl1purple");
		var btn_lower = div.getElementsByClassName('btn2')[1];
			btn_lower.classList.add("lvl2blue");
			btn_lower.classList.remove("lvl1blue");
		
		div.classList.remove("col");

		var card = div.getElementsByClassName('card')[0];
			card.classList.add("purple");
			card.classList.remove("blue");
    }
});

