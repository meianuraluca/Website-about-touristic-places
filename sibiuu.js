var description;
var ok=0;
var g=0;
window.onload= function(){
	
	description = localStorage.getItem("description");
	if(description != null){
		var descriptions = description.split(";");
		for(var i = 0 ; i < descriptions.length - 1 ; i++){
			var btn = document.createElement("input");
			btn.type = "button";
			btn.value = descriptions[i];
			btn.onclick=function(){
				var dsc = localStorage.getItem("description");
				d = dsc.split(";");
				var newDescription;
				if(d.length > 1){
					for(var j = 0 ; j < d.length - 1 ; j++){
						if(d[j] != this.value){
							if(newDescription == null)
								newDescription = d[j] + ';';
							else newDescription = newDescription + d[j] + ';';
						}
					}
					localStorage.setItem("description" , newDescription);
				}
				if(newDescription == null){
					localStorage.clear();
				}
				this.parentNode.removeChild(this);
			};
			var s = document.getElementById("sectiune");
			s.appendChild(btn);
		}
	}

	var fulguleti=setInterval(Multi,1000);

	var b = document.getElementById("a1");
	b.onclick =numef;
	b.onclick =f2;	
	var smyle=document.getElementById("schimb");
	smyle.addEventListener("click",function(){
		var poz=document.getElementById("acum");
		poz.src="main_gallery_54462704a243d.jpg";
		var txt=document.getElementById("demo");
		txt.innerHTML="Ca şi Palatul Cotroceni, Pelisorul va cunoaste mai multe etape ale decoratiei, ce vor ilustra evolutia sentimentelor si a gustului reginei Maria. De la ,,cuiburile aurite”, unde printesa mostenitoare, ranita de lumea reala, se putea refugia pentru a visa departe de cruda realitate, pana la epurarea severa a liniilor, la geometrismul Modern Style-ului sau la includerea in stilul personal a elementelor de arta romaneasca, expresie artistica a identificării Reginei cu durerile si bucuriile neamului romanesc. Aceasta este replica pe care,,Regina tuturor romanilor” a dat-o, peste ani, regelui Carol I si germanitatii sale nezdruncinate.";
		
	});
	var smyle1=document.getElementById("schimb1");
	smyle1.addEventListener("click",function(){
		var poz=document.getElementById("acum");
		poz.src="main_gallery_54462704a243d.jpg";
		
	});

	var l=document.getElementById("ad");
	l.classList.add("p1");
	
}





function schimba() {
  document.getElementById("schimb").classList.add("stil");
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function Multi()
{
	var i=document.createElement("img");
	i.src="autumn-1608537_960_720.png";
	i.style.width="auto";
	i.style.position="absolute";
	var x=50;
	i.style.height=x+"px";
	var d=document.querySelector("div");
	i.xnou=50;
	i.style.top=i.xnou+"px";
	i.size=Math.floor(Math.random()*200+1);
	i.style.height=i.size+"px";
	i.style.width=i.size+"px";
	i.style.left=Math.floor(Math.random()*1000+1)+"px";
	i.t=setInterval(function(){i.xnou+=50; i.style.top=i.xnou+"px";},200);
	d.appendChild(i);	
}
function numef(){
var t = document.getElementById("t1");
alert(t.value);

}
function f2(){
	description = localStorage.getItem("description");
	var b = document.createElement("input");
	var t= document.getElementById("t1");
	b.type="button";
	b.value=t.value;
	if(description == null)
		description = b.value + ';';
	else
		description = description + b.value + ";";
	localStorage.setItem("description" , description);
	var s = document.getElementById("sectiune");
	s.appendChild(b);
	b.onclick=function(){
		var dsc = localStorage.getItem("description");
		d = dsc.split(";");
		var newDescription = "";
			if(d.length > 0){
				for(var j = 0 ; j < d.length - 1 ; j++){
					if(d[j] != this.value){
						if(newDescription == null)
							newDescription = d[j] + ';';
						else newDescription = newDescription + d[j] + ';';
					}
				}
					localStorage.setItem("description" , newDescription);
			}
			if(newDescription == null){
				localStorage.clear();
			}
		remove(b);
	};
}
function remove( b ){

var s = document.getElementById("sectiune")
s.removeChild(b);

}