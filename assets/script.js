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

//Création des points
for (let i = 0; i < slides.length; i++) {
	let point = document.createElement("li");
	let listePoint = document.getElementById("bullet_point");
	point.classList.add("dot");
	listePoint.appendChild(point)
}

// Fonction mise à jour des points
function majPoint (index) {
	let pointCourant = document.querySelectorAll(".dot");
	pointCourant.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	});
}

// Fonction mise à jour du slider
function majSlider (index) {
	let imgSLider = document.getElementById("imgSlider");
	imgSLider.setAttribute("src",  "./assets/images/slideshow/"+slides[index].image);
	let tagLineSlider = document.getElementById("tagLineSlider");
	tagLineSlider.innerHTML = slides[index].tagLine;
	majPoint(index)
}

//Définition de l'index de la slide courante
let indexCourant = 0

//Mise à 0 des Slides
majSlider(indexCourant);


// Gestion des flèches avec mie à jour de l'index à chaque tour et bouclage à l'infini avec opérateur modulo
let flecheGauche = document.getElementById("flecheGauche");
flecheGauche.addEventListener("click", function () {
	indexCourant = (indexCourant - 1 + slides.length) % slides.length;
	majSlider(indexCourant)
})

let flecheDroite = document.getElementById("flecheDroite");
flecheDroite.addEventListener("click", function () {
	indexCourant = (indexCourant + 1 + slides.length) % slides.length;
	majSlider(indexCourant)
})