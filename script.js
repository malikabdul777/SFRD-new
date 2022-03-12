const faqHeading = document.querySelector(".faq-title");
const faqIndi = document.querySelectorAll(".faq-indi");
const faqDesc = document.querySelector(".faq-desc");
const faqExpandBtn = document.querySelectorAll(".faq-expand-btn");
const burgerMenu = document.querySelector("#burger-menu");
const mobSidebar = document.querySelector("#sidebar-mob");

gsap.registerPlugin(ScrollTrigger);

faqIndi.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("expand");
    faq.querySelector(".faq-expand-btn").classList.toggle("rotate");
  });
});

let isMobile = window.matchMedia("(max-width: 550px)").matches;
console.log(isMobile);

// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr("video", { captions: { active: true } });

// Expose player so it can be used from the console
window.player = player;

//Burger Menu
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mobSidebar.classList.toggle("active-sidebar");
});

//GSAP Animations
if (!isMobile) {
  gsap.from(".body-wrapper", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.from(".aboutus-img-container", {
    x: -150,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".who-we-are-sec",
      // markers: true,
      start: "top 45%",
      end: "bottom 98%",
      scrub: 1,
    },
  });

  gsap.from(".aboutus-text-content", {
    x: 150,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".who-we-are-sec",
      // markers: true,
      start: "top 45%",
      end: "bottom 98%",
      scrub: 1,
    },
  });

  gsap.from(".explore-nav-container", {
    y: 50,
    opacity: 0,
    duration: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".explore-nav-bar-container",
      // markers: true,
      start: "top 45%",
      end: "bottom 38%",
      scrub: 1,
    },
  });

  gsap.from(".video-content-container", {
    x: -150,
    opacity: 0,
    duration: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".explore-nav-bar-container",
      // markers: true,
      start: "top 45%",
      end: "bottom 78%",
      scrub: 1,
    },
  });

  gsap.from(".our-mission-container", {
    x: 150,
    opacity: 0,
    duration: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".our-mission",
      // markers: true,
      start: "top 45%",
      end: "bottom 78%",
      scrub: 1,
    },
  });

  gsap.from(".faq-section", {
    x: -150,
    opacity: 0,
    duration: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".faq-section",
      // markers: true,
      start: "top 45%",
      end: "bottom 78%",
      scrub: 1,
    },
  });
}
