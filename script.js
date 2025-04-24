let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
let slider = document.querySelector(".slider");

let autoSlideInterval;

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

function nextSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// Auto Slide Function
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide(1);
  }, 4000); // كل 4 ثواني
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// التحكم بالأسهم
document.querySelector(".prev").onclick = () => {
  stopAutoSlide();
  nextSlide(-1);
};

document.querySelector(".next").onclick = () => {
  stopAutoSlide();
  nextSlide(1);
};

// التحكم بالنقاط
for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = () => {
    stopAutoSlide();
    currentSlide(i);
  };
}

// وقف الحركة لما يقف الماوس على السلايدر
slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

// Initialize
showSlide(slideIndex);
startAutoSlide();
