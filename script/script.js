
function showinfo(element, head,value){
	if(element.lastElementChild.style.visibility == "visible"){
		element.style.maxHeight = "20px";
		element.lastElementChild.style.visibility = "hidden";
	}else{
		element.style.width = element.firstElementChild.offsetWidth+10 + "px";
		element.lastElementChild.style.display = "inline";
		element.lastElementChild.style.visibility = "visible";
		element.style.maxHeight = "200px";
	}
}
