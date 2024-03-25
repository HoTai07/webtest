updateSlide();
setInterval(() => {
  currentIndex++;
  if (currentIndex >= slideCount) {
    currentIndex = 0;
  }
  updateSlide();
}, 1000);

// Function to update the slide and navigation dots
function updateSlide() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, i) => {
    if (i === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}