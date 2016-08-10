var weather = prompt("Welcome to the weatherman. I will brighten up your day and do whatever the weather is like. What's the weather now?");
weather = weather.toLowerCase();

if (weather == "sunny") {
	document.getElementById("animation").src="//giphy.com/embed/xTcnSNxfOFmfCCUTPG";
} else if (weather == "windy") { // weather is windy - you guys fill this in
	document.getElementById("animation").src="//giphy.com/embed/d2W6sksZ9o3qopUc";
} else if (weather == "rainy") { // weather is rainy
	document.getElementById("animation").src="//giphy.com/embed/ZmYQyJf938lHO";
} else { // pick a gif that will be used if the user doesn't give an answer you have prepared for
	document.getElementById("animation").src="//giphy.com/embed/26BRF5cHrDjQWWJQA";
}