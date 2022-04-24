
// Banner section 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



  // counter section

  let valueDisplay =  document.querySelectorAll('.num');
  let interval = 5000;

  valueDisplay.forEach((valueDisplay)=>{
    let startvalue = 0 ;
    let endvalue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval/endvalue);
    let counter = setInterval(function(){
      startvalue +=1;
      valueDisplay.textContent = startvalue;
      if(startvalue == endvalue){
        clearInterval(counter)
      }
    });
      
    

  });




  // Swiper js
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 35,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 



