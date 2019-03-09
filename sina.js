function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.onload= function(){
var camere = ["Holul de Onoare", "Biblioteca regală", "Sălile de arme", "Sala de muzică"];
document.getElementById("ara").innerHTML = camere;
var mn=document.getElementById("se");
se.onclick=function() {
  camere.splice(2, 0, "Sala Florentină", "Sala Maură");
  document.getElementById("ara").innerHTML=camere;
}


var b = document.getElementById("a1");
b.onclick =function (){
var t = document.getElementById("t1");
alert(t.value);}
b.onclick =f2;
	var smyle=document.getElementById("schimb");
	smyle.addEventListener("click",function(){
		var poz=document.getElementById("acum");
		poz.src="main_gallery_54462704a243d.jpg";
		var txt=document.getElementById("demo");
		txt.innerHTML="Ca şi Palatul Cotroceni, Pelisorul va cunoaste mai multe etape ale decoratiei, ce vor ilustra evolutia sentimentelor si a gustului reginei Maria. De la ,,cuiburile aurite”, unde printesa mostenitoare, ranita de lumea reala, se putea refugia pentru a visa departe de cruda realitate, pana la epurarea severa a liniilor, la geometrismul Modern Style-ului sau la includerea in stilul personal a elementelor de arta romaneasca, expresie artistica a identificării Reginei cu durerile si bucuriile neamului romanesc. Aceasta este replica pe care,,Regina tuturor romanilor” a dat-o, peste ani, regelui Carol I si germanitatii sale nezdruncinate.";
    });
	var l=document.querySelectorAll("li");
	for(var i=0;i<l.length;i++)
	     l[i].classList.add("noua");
	 
	
	//cele doua divuri
	var div1=document.getElementById("list");
	var sec=document.getElementsByClassName("aunu");
	var ar=document.getElementById("art");
	var aic=document.getElementById("aici");
	var div2=document.getElementById("stop");
	var ok=0;
	div1.onclick=function(){
		if(ok==0)
		{var poz1=document.createElement("img");
		poz1.src="Casa-memoriala-‘George-Enescu’-Sinaia.jpg";
		ar.insertBefore(poz1,aic);
		var poz2=document.createElement("img");
		poz2.src="vila-luminis.jpg";
		ar.insertBefore(poz2,aic);
		ok=1;
		}
		
	}
	var g=0;
	div2.onclick=function(event){
		if(g==0)
		{ var poz3=document.createElement("img");
		  poz3.src="Casa_memoriala_George_Enescu_-_interior.jpg";
		  ar.insertBefore(poz3,aic);
		  var poz4=document.createElement("img");
		  poz4.src="casa-memoriala-george-enescu-05.jpg";
		  ar.insertBefore(poz4,aic);
		  event.stopPropagation();
		  g=g+1;
		}
	}
	
	
	
	//getcomps
	
	var b=document.getElementById("dwa");
	var d=document.getElementById("lala");
	var a=document.createElement("img");
	a.src="trenulete-in-miniatura-sinaia-02.jpg";
	d.ondragover=function(ev)
	{
		ev.preventDefault();
	}
	d.ondrop=function(ev)
	{	
	
				ev.preventDefault();
		d.appendChild(a);
			    var st=getComputedStyle(b,null);
		b.value=st.color;
		d.style.backgroundColor=st.color;
		

	}
	var ss=document.getElementsByName("apasa");
	for(let i=0;i<ss.length;i++)
	{
		ss[i].onclick=function()
		{
			if(ss[i].checked==true)
			{b.style.color=ss[i].value;
			}
		}
	}
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