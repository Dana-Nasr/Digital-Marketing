document.addEventListener("DOMContentLoaded", function () {
    gsap.fromTo(
        "[data-animate]",
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "[data-animate]",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        }
    );
});
