function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
window.onload=function(){
var x=document.getElementById("prima");
x.onclick=doua;
}
function prima1(){
var x=document.getElementById("prima");
x.src="DSC_8437 (2).jpg";
x.onclick=doua;
}
function doua(){
var x=document.getElementById("prima");
x.src="gradina-botanica-cluj-napoca.jpg";
x.onclick=treia;
}
function treia(){
var x=document.getElementById("prima");
x.src="gradina botanica - 3.jpg";
x.onclick=patra;
}
function patra(){
var x=document.getElementById("prima");
x.src="gradina-botanica-cluj-533x380.jpg";
x.onclick=prima1;
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

