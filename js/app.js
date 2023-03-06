window.onload = function () {
	document.body.classList.add('loaded_hiding');
window.setTimeout(function () {
	document.body.classList.add('loaded');
	document.body.classList.remove('loaded_hiding');
	}, 500);
}

let menu = document.querySelector('.menu')
let toggle = document.querySelector('.toggle')
toggle.onclick = function() {
  menu.classList.toggle('active')
}