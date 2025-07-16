$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});

// Smooth scroll for menu items
$(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
});

// Typing Text Animation for dynamic professions
var typed = new Typed("#text", {
    strings: [
        "Cybersecurity Services",
        "IT Consulting",
        "Cloud Solutions",
        "Web Development",
        "Custom Solutions"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Toggle night mode class on body (not sure why toggle on every load?)
// You might want to connect this to a user action
document.body.classList.toggle("night-mode");

// Menu toggle button event listener
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("header ul").classList.toggle("active");
});

// Day/Night Mode Toggle button
let banner = document.querySelector('.banner');
let daynight = document.querySelector('.dayNight');
if (daynight) {
  daynight.onclick = function () {
    banner.classList.toggle('night');
  }
}

// Global function used in inline onclick in HTML
function toggleMenu() {
    document.querySelector("header ul").classList.toggle("active");
}
