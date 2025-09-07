let btnConnexion = document.getElementById("btn1");
let btnInscription = document.getElementById("btn2");
let btnAnnulation = document.getElementById("btn4");

// partie div
let partHouse = document.querySelector(".container");
let partOverlay = document.querySelector(".overlay");
let partForm1 = document.querySelector(".formulaire_1");
let partForm2 = document.querySelector(".formulaire_2");
let partFooter = document.querySelector("footer");



// VALEUR PAR DEFAUT
//  moustapha partie bi moy gerer overlaY BI MEUNE NGAKO SUPPRIMER SOULA ARRANGER WOUL
partHouse.classList.add("fixer");
partFooter.classList.add("masquer");




let masquerF1 = function () {
    partOverlay.classList.add("hidden");
    partForm1.classList.add("hidden");
}
let demasquerF1 = function () {
    partOverlay.classList.remove("hidden");
    partForm1.classList.remove("hidden");
}

let masquerF2 = function () {
    partOverlay.classList.add("hidden");
    partForm2.classList.add("hidden");
}
let demasquerF2 = function () {
    partOverlay.classList.remove("hidden");
    partForm2.classList.remove("hidden");
}

btnConnexion.addEventListener('click', function () {
    masquerF1();
    masquerF2();
    partHouse.classList.remove("fixer");
    partFooter.classList.remove("masquer");

});
//bouton d'inscription
btnInscription.addEventListener('click', function () {
    masquerF1();
    demasquerF2();
});

//bouton annulation
btnAnnulation.addEventListener('click', function () {
    window.location.href = "../accueil/Acceuil.html";
});

// overlay
partOverlay.addEventListener('click', function () {
    window.location.href = "../accueil/Acceuil.html";
});



// boutons pour gerer le defilement des pages

let chev1 = document.querySelectorAll(".chev1");
let chev2 = document.querySelectorAll(".chev2");

//image
let IMG = document.querySelectorAll(".mais img");
console.log(IMG);

let i = 1;
let max = 3;
let recupererMasque = 0;


// chevrons 1
for (let k = 0; k < chev1.length; k++) {
    chev1[k].addEventListener('click', function () {
        if (i >= max || i > 1) {

            chev2[recupererMasque].classList.remove("hidden");// on enleve le masquage
            IMG[k].src = `image/chambre/maison${k + 1}/chambre${--i}.jpg`;//affichage des images qui ont une extension.jpg
        } else {
            recupererMasque = k;
            IMG[k].src = `image/chambre/maison${k + 1}/chambre${1}.jpg`// valeur par defaut
            chev1[k].classList.add("hidden");

        }
    });
}

//chevrons 2
for (let j = 0; j < chev2.length; j++) {
    chev2[j].addEventListener('click', function () {
        if (i < max) {
            chev1[recupererMasque].classList.remove("hidden");
            IMG[j].src = `image/chambre/maison${j + 1}/chambre${i}.jpg`;
            i++;
        } else {
            recupererMasque = j;
            IMG[j].src = `image/chambre/maison${j + 1}/chambre${1}.jpg`;  //image par defaut
            chev2[j].classList.add("hidden");// on masque le chevron

        }

    });
}

