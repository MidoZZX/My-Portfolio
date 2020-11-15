window.onload = function() {
    toggleNavbar();
}

window.onscroll = function() {
    sticky();
}

function sticky() {
    let navbar = document.getElementById("navbar");
    let offset = navbar.offsetTop;

    if (window.pageYOffset > offset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function toggleNavbar() {
    let hamburger = document.querySelector(".hamburger");
    let navLinks = document.querySelector(".nav-links");
    let links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle("open");
    });

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    }
}