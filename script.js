
$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }


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
    document.body.classList.toggle("night-mode");
    document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("active");
});

    


    // Day/Night Mode Toggle (for fun interaction)
    let banner = document.querySelector('.banner');
    let daynight = document.querySelector('.dayNight');
    daynight.onclick = function () {
        banner.classList.toggle('night');
    }
function toggleMenu() {
    document.querySelector("header ul").classList.toggle("active");
}

});

