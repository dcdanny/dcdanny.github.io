
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

gen = false;
function genCon() {
	if (!gen) {
		gen = true;
		document.getElementById('genc').innerHTML = "Loading...";
		setTimeout(function () {
			var a = "l.com";
			var b = "dcdanny";
			var c = "g";
			var d = "clarke";
			var e = 8 * 8;
			var f = "mai";
			var g = String.fromCharCode(e);
			var x = d + g + c + f + a;
			document.getElementById('genc').innerHTML = "<a h" + "ref=" + f + "lto" + ":" + b + x + ">" + b + x + "</a>";
		}, 900);
	}
}


function skiLine(scroll) {
	var scrollStd = 0;
	var left = 0, top = 0, transform = "";
	scroll = between1and0(scroll)
	//scroll scrollStd	left	top
	//	0		  0		120		-50
	//	0.33	0 1		0		0
	//	0.66	1 0		200		85
	//	1		  1		50		160

	if (scroll < 0.33) {
		scrollStd = scroll * 3;
		left = 150 * scrollStd + 50; //200-50 s + 50
		top = -75 * scrollStd + 160; //85-160 s + 160
		transform = "";
	} else if (scroll > 0.33 && scroll < 0.66) {
		scrollStd = (scroll - 0.33) * 3;
		left = -200 * scrollStd + 200; //200 s + 200
		top = -85 * scrollStd + 85; //-85 s + 85
		transform = "rotate(15deg) scaleX(-1)";
	} else {
		scrollStd = (scroll - 0.66) * 3;
		left = 120 * scrollStd; //120 s
		top = -50 * scrollStd; //-50 s
	}
	return [left, top, transform];
}

function between1and0(value) {
	//Forces a value to closest point between 0 and 1
	if (value >= 1) { return 1; }
	else if (value <= 0) { return 0; }
	else { return value; }
}
