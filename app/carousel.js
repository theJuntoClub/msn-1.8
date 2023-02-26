const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
let currentIndex = 0;

const showNextImage = () => {
  // images[currentIndex].classList.toggle("visible");
  images[currentIndex].classList.remove("visible");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("visible");
};
showNextImage();
setInterval(showNextImage, 3000);

/* toggle === remove/add */
