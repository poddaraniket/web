var numSquares=6
var lis= generateColor(numSquares);  

var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var color=document.querySelectorAll(".color");
var pickedColor=pickcolor();
var colorText=document.querySelector("#num");
var head=document.querySelector("#head");
var attempt=document.querySelector("#attempt");
var newGame=document.querySelector("#newGame");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
    numSquares=3;
    lis= generateColor(numSquares);
	pickedColor=pickcolor();
    colorText.textContent= pickedColor;
    for(var i=0;i<color.length;i++)
    {
    	if(lis[i])
    	  color[i].style.backgroundColor= lis[i];
    	else
    	   color[i].style.display= "none"; 	
    }
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
    numSquares=6;
    lis= generateColor(numSquares);
	pickedColor=pickcolor();
	colorText.textContent= pickedColor;
	for(var i=0;i<color.length;i++)
    {
    	  color[i].style.backgroundColor= lis[i];
    	   color[i].style.display= "block"; 	
    }
});


newGame.addEventListener("click",function()
{
	attempt.textContent="";
	lis= generateColor(numSquares);
	pickedColor=pickcolor();
	colorText.textContent= pickedColor;
	this.textContent="New color"
	for(var i=0;i<color.length;i++)
    {
   		color[i].style.backgroundColor= lis[i];
   	}
   	head.style.backgroundColor="steelblue";
});

colorText.textContent= pickedColor;

for(var i=0;i<color.length;i++)
   {
   		color[i].style.backgroundColor= lis[i];

   		color[i].addEventListener("click",function(){
   			if(this.style.backgroundColor==pickedColor)
   			{
   				changeColor(pickedColor);
   				head.style.backgroundColor=pickedColor;
         /* <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.14/howler.js"></script>
          var sound1=new Howl({
             urls:['sounds/clay.mp3']
          });  
          sound1.paly();*/
   				attempt.textContent="CORRECT";
   				newGame.textContent="Play Again";
   			}
   			else
   			{
   				this.style.backgroundColor="black";
   			    attempt.textContent="TRY AGAIN";
   			}
   		});
   }		
function changeColor(colors)
{
	for(var i=0;i<color.length;i++)
	{
	color[i].style.backgroundColor=colors;
	}
}

function pickcolor()
{
	var random=Math.floor(Math.random() * lis.length);
	return lis[random];
}

function generateColor(num)
{
   var arr=[];
   for(var i=0;i<num;i++)
   	  {
   	  		arr.push(randomColor());
   	  }
   	  return arr;
}

function randomColor()
{
   var r=Math.floor(Math.random()*256);
   var g=Math.floor(Math.random()*256);
   var b=Math.floor(Math.random()*256);

   return ("rgb("+r+", "+g+", "+b+")");
}