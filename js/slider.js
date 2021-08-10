var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slideContainer = document.getElementById("slideshow-container");
  var sliderImagesURLs = [
    '../assets/games/biomutant.jpg',
    '../assets/games/bloodlines2.jpg',
    '../assets/games/dyinglight2.jpg',
    
  ]
  /*
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  */
  slideIndex++;
  if (slideIndex > sliderImagesURLs.length) {slideIndex = 1}
  slideContainer.style.backgroundImage = `url(${sliderImagesURLs[slideIndex-1]})`

  //slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}