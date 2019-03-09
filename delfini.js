
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
window.onload= function(){

var h=document.querySelector("body");
var g=document.getElementById("buton");
h.onmousemove=function(ev)
{g.style.left=ev.pageX+1+"px";
g.style.top=ev.pageY+1+"px";
}
var b = document.getElementById("a1")
b.onclick =numef;
b.onclick =f2;
var pag;
var listaClasa=document.getElementsByClassName("imp"); 
for(var i=0;i<listaClasa.length;i++)  
	listaClasa[i].style.color="#003366";
}
var timp = setInterval(ftimp, 1000);

function ftimp() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("dem").innerHTML = t;
}

function Stoptimp() {
  clearInterval(timp);
}
function Deschide() {
  pag = window.open("http://www.delfinariu.ro/#ProgramVizitare", "_blank", "width=500, height=500");
}

function Inchide() {
  pag.close();
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
