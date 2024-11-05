document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    "[data-animate]",
    { opacity: 0, scale: 1, x: 10, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.4,
      scrollTrigger: {
        trigger: "[data-animate]",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    "[data-animate1]",
    { opacity: 0, scale: 1, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.5)",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#deliver",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    }
  );
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    "[data-animate2]",
    { opacity: 0, y: 100 }, 
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.3, 
      scrollTrigger: {
        trigger: "#partner", 
        start: "top 50%", 
        toggleActions: "play none none none",
      },
    }
  );
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.fromTo(
      "[data-animate2]",
      { opacity: 0, scale: 1, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.5)",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#expertise",
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  });