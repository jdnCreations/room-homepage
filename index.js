const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.getElementById('nav');
const sliderLeft = document.getElementById('slider-left');
const sliderRight = document.getElementById('slider-right');
const first = document.querySelector('.first');

const slideH1 = document.querySelector('.slide h1');
const slideP = document.querySelector('.slide p');

const slideTitles = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials"
];

const slidePs = [
  `We provide unmatched quality, comfort, and style for property owners across the country.
  Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
  `
  With stores all over the world, it's easy for you to find furniture for your home or place of business.
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.
  `,
  `
   Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.
  `
];

let currentSlide = 0;


// sets the slide content based on the slide
function setSlideContent(slideNumber) {
  slideH1.textContent = slideTitles[slideNumber];
  slideP.textContent = slidePs[slideNumber];

  first.dataset.slide = slideNumber;
}

// gets slide number to show based on the arrow clicked.
function getSlide(direction) {
  switch(currentSlide) {
  case 0:
    currentSlide = direction === "left" ? 2 : 1;
    break;
  case 1:
    currentSlide = direction === "left" ? 0 : 2;
    break;
  case 2:
    currentSlide = direction === "left" ? 1 : 0;
    break;
  default:
    throw new Error("Current slide is outside of appropriate range.");
  }

  return currentSlide;
}

// opens mobile nav
open.addEventListener('click', () => {
  nav.style.display = 'flex';
  open.ariaExpanded = "true";
});

// closes mobile nav
close.addEventListener('click', () => {
  nav.style.display = 'none';
  open.ariaExpanded = "false";
})

sliderLeft.addEventListener('click', () => {
  setSlideContent(getSlide("left"));
});

sliderRight.addEventListener('click', () => {
  setSlideContent(getSlide("right"));
})