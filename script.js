var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn = document.querySelectorAll("delete");
var listItems = document.querySelectorAll('li');
 	

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.style.marginLeft = "10px";
	button.innerHTML = "remove";
	button.setAttribute("class", "delete");
	li.setAttribute("class", "bold");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//add event to the ul 
function toggleLi (e){
	if(e.target.tagName === "LI" ){
		e.target.classList.toggle("done");
	}
}

ul.addEventListener("click", toggleLi);
ul.addEventListener("click", toggleBtn);

 //Remove list item
 function toggleBtn(event){
		var btn = event.target.closest('.delete')
		if(!btn){
			return
		}
		//btn.parentElement.remove();
		btn.closest('li').remove();
}
