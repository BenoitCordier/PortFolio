// Fonctionnement bouton barre de navigation

var sections = ["presentation", "portfolio", "skill", "contact"];
var visibleSectionId = null;

function sectionVisibility(sectionId) {
    if(visibleSectionId === sectionId) {
        visibleSectionId = null;
    } else {
        visibleSectionId = sectionId;
    }
    hideNonVisibleSections();
}

function hideNonVisibleSections() {
    var i, sectionId, section;
    
    for(i = 0; i < sections.length; i++) {
        sectionId = sections[i];
        section = document.getElementById(sectionId);
        if(visibleSectionId === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

// Typing effect

var typedText = document.getElementById('typing');
typedText.innerHTML = '';
var n = 0;
var str = 'Developpeur web junior';
var typeTimer = setInterval(function() {
    n = n + 1;
    typedText.innerHTML = str.slice(0, n);

    if (n === str.length) {
        clearInterval(typeTimer);
        typedText.innerHTML = str;
        n = 0;

        setInterval(function() {
            if (n === 0) {
                typedText.innerHTML = str + "|"
                n = 1;
            } else {
                typedText.innerHTML = str
                n = 0;
            };
        }, 500);
    };
}, 100)

//Open mobile navbar

function mobileMenu() {
    var x = document.getElementById("navigationBar");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}