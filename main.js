const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.querySelectorAll('.faq2__header').forEach(header => {
  header.addEventListener('click', () => {
      const description = header.nextElementSibling; // Get the description div
      description.classList.toggle('active'); // Toggle the active class
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 250,
});

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});


ScrollReveal().reveal(".header__container .header__flex", {
  ...scrollRevealOption,
  delay: 750,
});
ScrollReveal().reveal(".header__container .CTA__btns", {
    ...scrollRevealOption,
    delay: 1000,
});


ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".steps2__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".aboutCEO__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".aboutCEO__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".aboutCEO__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".aboutCEO__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".ceo__socials", {
  ...scrollRevealOption,
  delay: 2000,
});


const faq = document.querySelector(".faq__grid");

faq.addEventListener("click", (e) => {
  const target = e.target;
  const faqCard = target.closest(".faq__card");
  if (target.classList.contains("ri-arrow-down-s-line")) {
    if (faqCard.classList.contains("active")) {
      faqCard.classList.remove("active");
    } else {
      Array.from(faq.children).forEach((item) => {
        item.classList.remove("active");
      });
      faqCard.classList.add("active");
    }
  }
});

ScrollReveal().reveal(".faq__image img", {
  ...scrollRevealOption,
  origin: "left",
});
// Initialize ScrollReveal for elements with class names


//new stuff
document.addEventListener("DOMContentLoaded", () => {
  const faq2 = document.querySelector(".faq2__grid");

  if (faq2) {
      faq2.addEventListener("click", (e) => {
          const target2 = e.target;
          const faq2Card = target2.closest(".faq2__card");
          if (target2.classList.contains("ri-arrow-down-s-line")) {
              if (faq2Card.classList.contains("active")) {
                  faq2Card.classList.remove("active");
              } else {
                  Array.from(faq2.children).forEach((item) => {
                      item.classList.remove("active");
                  });
                  faq2Card.classList.add("active");
              }
          }
      });
  } 
});




ScrollReveal().reveal(".faq2__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__details-image about__details-image-1", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__details-image about__details-image-2", {
  ...scrollRevealOption,
  origin: "left",
});


ScrollReveal().reveal(".about__details-image about__details-image-3", {
  ...scrollRevealOption,
  origin: "left",
});


const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});


const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated = false;
window.addEventListener("scroll", () => {
  if(
    pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let count = 0;
      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if(count < target){
          count++;
          counter.innerText = count;
          setTimeout(updateCount, 10);
        }else{
          counter.innerText = target;
        }
      }
      updateCount();
      activated = true;
    });
  }else if(
    pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
    activated = false;
  }
});

var swiper2 = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

 

