document.getElementById("toggle").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("nav-header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
});

//var currentScroll = window.pageYOffset || document.body.scrollTop; 
// con esto nos devolvera la posicion de scroll. scroll?
var lastScrollTop=0;
window.addEventListener("scroll", function(){
	var currentScroll = window.pageYOffset || document.body.scrollTop;
	if (currentScroll > lastScrollTop) {
		console.log("down");
	}else{
		console.log("up");
	}
	lastScrollTop = currentScroll;
});
//hacemos nuestra primera comparacion y debuggeamos el resultado

nav.header-in{
	background-color:rgba(217, 40, 130, 0.9);
}