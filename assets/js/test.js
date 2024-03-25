let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlides() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Đổi ảnh mỗi 3 giây
}

showSlides();

