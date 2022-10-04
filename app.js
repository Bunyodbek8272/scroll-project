// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// fixed navbar
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});
// select link
const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
        //prevent default
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight =linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let positon = element.offsetTop - navHeight; 

        if (!fixedNav) {
            positon = positon - navHeight; 
        }

        if (navHeight > 82) {
             positon = positon + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: positon,
        });
        linksContainer.style.height = 0;
    });
});

