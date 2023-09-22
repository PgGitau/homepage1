(function() {
  "use strict";

  //  Initialize Swiper 
		var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      
      loop: true,
      loopFillGroupWithBlank: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
			breakpoints: {     
			// when window width is 425px - 640px
			 425: {       
         slidesPerView: 2,
         spaceBetween: 10     
       },    
      // when window width is 640px - 900px    
       640: {       
         slidesPerView: 3,       
         spaceBetween: 20     
       },   
  
      // when window width is >= 900px     
       900: {       
         slidesPerView: 4,       
         spaceBetween: 30     
       } 
      }
    });
  
  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();
  
})() 