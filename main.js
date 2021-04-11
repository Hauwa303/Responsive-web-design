/*const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".nav-bar ul");
const navbarLinks = document.querySelectorAll(".nav-bar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
 navbarToggler.classList.toggle("open-navbar-toggler");
 navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
 if (navbarMenu.classList.contains("open")) {
  navbarToggler.click();
 }
}*/

$(function() {
  var ulLi = $('nav ul > li'),
      fa = $('nav ul > li:last-of-type a .fa');
  
   $('nav ul').append('<ol></ol>');
  
   $('nav').each(function() {
     for (var i=0; i <= ulLi.length - 3; i++) {
       $('nav ul > ol').append("<li>"+ i +"</li>");
       $('nav ul > ol > li').eq(i).html(ulLi.eq(i+1).html());
     }
  });

  $('nav ul > li:last-of-type').on('click', function() {
    fa.toggleClass('fa-bars');
    fa.toggleClass('fa-times');
    $(this).parent().children('ol').slideToggle(500);
  });
});

// Em An
