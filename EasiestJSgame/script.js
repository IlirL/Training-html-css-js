var character = document.getElementById("character");
var block = document.getElementById("block");

addEventListener('click', () => {
	
	if(character.classList.contains("animate")){return}

		character.classList.add("animate")
	
	setTimeout(function(){
		character.classList.remove("animate");
	}, 500);
});

//console.log("ilir");

var checkDead = setInterval(function(){
	var characterTop = 
	parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = 
	parseInt(window.getComputedStyle(block).getPropertyValue("left"));

	if(blockLeft<20 && blockLeft>0 && characterTop>=130)
	{
		block.style.animation = "none";
		block.style.display = "none";
		alert("u lose.")
	}
}, 10);