function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
window.onload= function(){
var b = document.getElementById("a1")
b.onclick =numef;
b.onclick =f2;
b.onclick=ex;
}

function numef(){
var t = document.getElementById("t1")
alert(t.value);

}

function f2(){
	var b = document.createElement("input")
	var t= document.getElementById("t1")
	b.type="button"
	b.value=t.value
	var s = document.getElementById("sectiune")
	s.appendChild(b);
	b.onclick=function(){
		remove(b);
	};
}
function remove( b ){

var s = document.getElementById("sectiune")
s.removeChild(b);

}