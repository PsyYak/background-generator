var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");



setGradient();

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+", "
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";";
}

function getRandomColor(){
	// Generate random hex color
	var value1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var value2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	// Set it to color input value
	if(value1.length === 6){
		value1 = value1 + "1";
	}else if(value2.length === 6){
		value2 = value2 + "2";
	}
	color1.value = value1;
	color2.value = value2;
	// call function to setGradient to change colors and the h3 values
	setGradient();

}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

