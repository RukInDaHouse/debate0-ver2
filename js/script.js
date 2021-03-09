function addBlueBox(e) {

	let div = document.createElement("div");
    let father = this.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(father);
    var col = document.getElementsByClassName('col')[7];
    var content = col.getElementsByClassName('content')[0];
        content.appendChild(div);
    div.classList = father.classList;
    div.innerHTML = father.innerHTML;
    
    let newBtns = div.getElementsByClassName('btn2');   
    let newZoomins = document.getElementsByClassName('zoomin'); 
	let newZoomouts = document.getElementsByClassName('zoomout'); 
	let linkbuttons = document.getElementsByClassName('link_button');
	let likebuttons = document.getElementsByClassName('like_button');

    [...newBtns].forEach(button=>button.addEventListener("click", addBlueBox));        
    [...newZoomins].forEach(button=>button.addEventListener("click", zoomIn));
	[...newZoomouts].forEach(button=>button.addEventListener("click", zoomOut));    
    [...linkbuttons].forEach(button=>button.addEventListener("click", linkButton));
	[...likebuttons].forEach(button=>button.addEventListener("click", likeButton));

    div.classList.remove("col");
};

function changeColor(elem, color) {
    elem.parentElement.style.background = color;
}

function zoomIn(e){

	let father = this.parentElement.parentElement.parentElement.parentElement;
	var card = father.getElementsByClassName("card")[0];
  		card.style.height = card.offsetHeight + 50 + 'px';
}

function zoomOut(e){

	let father = this.parentElement.parentElement.parentElement.parentElement;
	var card = father.getElementsByClassName("card")[0];
		card.style.height = card.offsetHeight - 50 + 'px';
}

function linkButton(e){

	let father = this.parentElement.parentElement.parentElement.parentElement;
	var card = father.getElementsByClassName("card")[0];
	var speech = card.getElementsByClassName("speech")[0];
	var link = card.getElementsByClassName("link_button")[0];
		speech.classList.toggle("invisible");
		link.classList.toggle("active");
}

function likeButton(e){

	let father = this.parentElement.parentElement.parentElement.parentElement;
	var card = father.getElementsByClassName("card")[0];
	var like = card.getElementsByClassName("like_button")[0];
		like.classList.toggle("active");
}


let btn2s = document.getElementsByClassName('btn2');
let zoomins = document.getElementsByClassName('zoomin');
let zoomouts = document.getElementsByClassName('zoomout');
let linkbuttons = document.getElementsByClassName('link_button');
let likebuttons = document.getElementsByClassName('like_button');

[...btn2s].forEach(button=>button.addEventListener("click", addBlueBox));
[...zoomins].forEach(button=>button.addEventListener("click", zoomIn));
[...zoomouts].forEach(button=>button.addEventListener("click", zoomOut));
[...linkbuttons].forEach(button=>button.addEventListener("click", linkButton));
[...likebuttons].forEach(button=>button.addEventListener("click", likeButton));


var zoom = 1;
var zoomStep = 0.2;

document.getElementById("zoomIn").addEventListener("click", function() {
    zoom += zoomStep;
    document.getElementById("zoomtext").style.transform = "scale(" + zoom + ")";
});
	
document.getElementById("zoomOut").addEventListener("click", function() {
    if (zoom > zoomStep) {
    zoom -= zoomStep;
    document.getElementById("zoomtext").style.transform = "scale(" + zoom + ")";
    }
});
