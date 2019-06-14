 menu.onclick = function myFunction(){
	var x = document.getElementById('mytopnav');

	if(x.className === "top__nav"){
		x.className += " responsive";
	} else {
		x.className = "top__nav";
	}
}