// Nav Bar
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
allEventListners();
function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 10) {
      $('.navbar-area').addClass('scrolled');
  } else {
      $('.navbar-area').removeClass('scrolled');
  }
});

//End Nav Bar

//Carousel
$(document).ready(function(){
    $(".top-banner").owlCarousel({
      items:1,
      autoplay:true,
      loop:true,
      autoplayTimeout:2000,

    });

    //Some of our products
    $(".owl-products").owlCarousel({
      autoplay:true,
      loop:true,
      autoplayTimeout:2000,
      responsive: {
        0: {
            items: 1
        },
        768: {
            items: 4
        }
      }
    });
//End Some of our products
$(".owl-feedback").owlCarousel({
  items:3,
  autoplay:true,
  loop:true,
  autoplayTimeout:2000,

});
//feedback


//End feedback
  });
//End Carousel

//Sweet alert

//home page
swal({
  title:"شركة مونة عيلتنا للمنتجات الغذائيّة",
  text:"أهلاً وسهلاً بكم في موقعنا الالكتروني",
  timer:"2000",
  
})
//End Sweet alert 