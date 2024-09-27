const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let flecheGauche = document.getElementById("flecheGauche");
flecheGauche.addEventListener("click", function () {
	console.log ("clic gauche")
})

let flecheDroite = document.getElementById("flecheDroite");
flecheDroite.addEventListener("click", function () {
	console.log ("clic droite")
})

let bulletPoint = document.querySelector(".dots");
let nbBulletPoint = slides.length;
