const slideImages = [
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers3c9095c4.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers1dde2dff.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers2f856ebb.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers40b07bc7.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers51fd2ccc.jpg"
];

let currentSlideIndex = 0;
const totalSlides = slideImages.length;

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex === totalSlides) currentSlideIndex = 0;
  document.getElementById("avenger-image").src = slideImages[currentSlideIndex];
}

function previousSlide() {
  currentSlideIndex--;
  if (currentSlideIndex === -1) currentSlideIndex = totalSlides - 1;
  document.getElementById("avenger-image").src = slideImages[currentSlideIndex];
}

function autoSlide() {
  nextSlide();
}

const slideIntervalDuration = 1000; //milliseconds

const interval = setInterval(function () {
  autoSlide();
}, slideIntervalDuration);
