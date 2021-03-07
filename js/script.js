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
    [...newBtns].forEach(button=>button.addEventListener("click", addBlueBox));        
    [...newZoomins].forEach(button=>button.addEventListener("click", zoomIn));    
    
    div.classList.remove("col");
};

function zoomIn(e){
 let father = this.parentElement.parentElement.parentElement.parentElement;
  var card = father.getElementsByClassName("card")[0];
  card.style.height = card.offsetHeight + 50 + 'px';
  card.style.width = card.offsetWidth + 50 + 'px';
}

function zoomOut(e){
	let father = this.parentElement.parentElement.parentElement.parentElement;
	 var card = father.getElementsByClassName("card")[0];
	 card.style.height = card.offsetHeight - 50 + 'px';
	 card.style.width = card.offsetWidth - 50 + 'px';
   }


let btn2s = document.getElementsByClassName('btn2');
let zoomins = document.getElementsByClassName('zoomin');
let zoomouts = document.getElementsByClassName('zoomout');


[...btn2s].forEach(button=>button.addEventListener("click", addBlueBox));
[...zoomins].forEach(button=>button.addEventListener("click", zoomIn));
[...zoomouts].forEach(button=>button.addEventListener("click", zoomOut));


document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("link_button")) {  
		var father = this;
		var card = father.getElementsByClassName("card")[0];
		var speech = card.getElementsByClassName("speech")[0];
		var link = card.getElementsByClassName("link_button")[0];
			speech.classList.toggle("invisible");
			link.classList.toggle("active");
    }
});

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("like_button")) {  
		var father = this;
		var card = father.getElementsByClassName("card")[0];
		var like = card.getElementsByClassName("like_button")[0];
			like.classList.toggle("active");
    }
});