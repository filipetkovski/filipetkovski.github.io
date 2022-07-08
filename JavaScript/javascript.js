//Hamburger Menu
function hamburgerClick() {
    const nav = document.querySelector(".menu-list");
    const navbar = document.querySelector(".menu-list ul");
    const hamburger = document.querySelector(".menu-button");

    hamburger.style.opacity = '0';

    nav.style.opacity = '1';
    nav.style.zIndex = '100';
    nav.style.height = '100vh';
    nav.style.transition = '0.5s';
    nav.style.transitionDuration = 'ease-in-out';
    nav.style.top = '0';
    navbar.style.display = 'flex';
}

function closeHamburger() {
    const nav = document.querySelector(".menu-list");
    const navbar = document.querySelector(".menu-list ul");
    const hamburger = document.querySelector(".menu-button");

    hamburger.style.opacity = '1';

    nav.style.opacity = '0';
    navbar.style.display = 'none';
    nav.style.zIndex = '-1';
    nav.style.height = '0';
}

//Scrolling portfolio

function openAll() {
    let all = document.querySelector(".java-scrolling__all");
    let projects = document.querySelector(".java-scrolling__projects");
    let social = document.querySelector(".java-scrolling__social");
    let product = document.querySelector(".java-scrolling__product");

    const conall = document.querySelector(".container11");
    const conprojects = document.querySelector(".container22");
    const consocial = document.querySelector(".container33");
    const conproduct = document.querySelector(".container44");

    all.style.borderBottom = "3px solid orange";
    projects.style.borderBottom  = "none";
    social.style.borderBottom  = "none";
    product.style.borderBottom  = "none";

    conall.style.display = "grid";
    conprojects.style.display = "none";
    consocial.style.display = "none";
    conproduct.style.display = "none";
}

function openProject() {
    let all = document.querySelector(".java-scrolling__all");
    let projects = document.querySelector(".java-scrolling__projects");
    let social = document.querySelector(".java-scrolling__social");
    let product = document.querySelector(".java-scrolling__product");

    const conall = document.querySelector(".container11");
    const conprojects = document.querySelector(".container22");
    const consocial = document.querySelector(".container33");
    const conproduct = document.querySelector(".container44");

    all.style.borderBottom = "none";
    projects.style.borderBottom  = "3px solid orange";
    social.style.borderBottom  = "none";
    product.style.borderBottom  = "none";

    conall.style.display = "none";
    conprojects.style.display = "grid";
    consocial.style.display = "none";
    conproduct.style.display = "none";

}

function openSocial() {
    let all = document.querySelector(".java-scrolling__all");
    let projects = document.querySelector(".java-scrolling__projects");
    let social = document.querySelector(".java-scrolling__social");
    let product = document.querySelector(".java-scrolling__product");

    const conall = document.querySelector(".container11");
    const conprojects = document.querySelector(".container22");
    const consocial = document.querySelector(".container33");
    const conproduct = document.querySelector(".container44");

    all.style.borderBottom = "none";
    projects.style.borderBottom  = "none";
    social.style.borderBottom  = "3px solid orange";
    product.style.borderBottom  = "none";

    conall.style.display = "none";
    conprojects.style.display = "none";
    consocial.style.display = "grid";
    conproduct.style.display = "none";

}

function openProduct() {
    let all = document.querySelector(".java-scrolling__all");
    let projects = document.querySelector(".java-scrolling__projects");
    let social = document.querySelector(".java-scrolling__social");
    let product = document.querySelector(".java-scrolling__product");

    const conall = document.querySelector(".container11");
    const conprojects = document.querySelector(".container22");
    const consocial = document.querySelector(".container33");
    const conproduct = document.querySelector(".container44");

    all.style.borderBottom = "none";
    projects.style.borderBottom  = "none";
    social.style.borderBottom  = "none";
    product.style.borderBottom  = "3px solid orange";

    conall.style.display = "none";
    conprojects.style.display = "none";
    consocial.style.display = "none";
    conproduct.style.display = "grid";
}


//Arrow buttons
function scrolll() {
    const element = outerWidth;
    let value1;

    if(element>899 && element<1201) {
        value1 = (element-600);
    }
    else if(element>701 && element<900) {
        value1 =  (element-400);
    }
    else if(element>499 && element<700) {
        value1 =  (element-150);
    }
    else if(element>460 && element<500) {
        value1 = (element-100);
    }
    else {
        value1 = element+10;
    }

    let left = document.querySelector(".more-scroll");
    left.scrollBy(value1, 0);
}
function scrollr() {
    const element = outerWidth;
    let value1;

    if(element>899 && element<1201) {
        value1 = (element-500);
    }
    else if((element>701) && (element<900)) {
        value1 = (element-400);
    }
    else if(element>499 && element<700) {
        value1 =  (element-150);
    }
    else if(element>460 && element<500) {
        value1 = (element-100);
    }
    else {
        value1 = element+10;
    }
    let right = document.querySelector(".more-scroll");
    right.scrollBy(-value1, 0);
}

