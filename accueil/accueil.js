

// boutons pour gerer le defilement des pages

let chev1 = document.querySelectorAll(".chev1");
let chev2 = document.querySelectorAll(".chev2");

//image
let IMG = document.querySelectorAll(".mais img");
console.log(IMG);

let i = 1;
let max = 16;
let recupererMasque = 0;


// chevrons 1
for (let k = 0; k < chev1.length; k++) {
    chev1[k].addEventListener('click', function () {
        if (i >= max || i > 1) {
            chev2[recupererMasque].classList.remove("hidden");// on enleve le masquage
            IMG[k].src = `image/chambre${--i}.jpg`;//affichage des images qui ont une extension.jpg
        } else {
            recupererMasque = k;
            IMG[k].src = `image/chambre${1}.jpg`;// valeur par defaut
            chev1[k].classList.add("hidden");

        }
    });
}

//chevrons 2
for (let j = 0; j < chev2.length; j++) {
    chev2[j].addEventListener('click', function () {
        if (i < max) {
            chev1[recupererMasque].classList.remove("hidden");
            IMG[j].src = `image/chambre${i}.jpg`;
            i++;
        } else {
            recupererMasque = j;
            IMG[j].src = `image/chambre${1}.jpg`; //image par defaut
            chev2[j].classList.add("hidden");// on masque le chevron

        }

    });
}


