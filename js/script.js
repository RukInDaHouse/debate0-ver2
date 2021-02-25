function change_color(elem, color) {
    elem.parentElement.style.background = color;
}

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("zoomin")) {  
		var father = this;
		var card = father.getElementsByClassName("card")[0];
			card.style.height = card.offsetHeight + 50 + 'px';
			card.style.width = card.offsetWidth + 50 + 'px';
    }
});

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("zoomout")) {  
		var father = this;
		var card = father.getElementsByClassName("card")[0];
			card.style.height = card.offsetHeight - 50 + 'px';
			card.style.width = card.offsetWidth - 50 + 'px';
    }
});

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("lvl1blue")) {
        var div = document.createElement("div");
        var father = e.path[5];
        var col = document.getElementsByClassName('col')[8];
		var content = col.getElementsByClassName('content')[0];
			content.appendChild(div);
        div.classList = father.classList;
        div.innerHTML = father.innerHTML;
        
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
			
        div.classList = father.classList;
        div.innerHTML = father.innerHTML;
        
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

