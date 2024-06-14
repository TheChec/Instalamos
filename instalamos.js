window.sr = ScrollReveal();

//Efecto de los divs contenedor de la información basica

sr.reveal('.description1', {
    duration:2000,
    origin: 'left',
    distance: '100px',
});
sr.reveal('.description2', {
    duration:2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.description3', {
    duration:2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.title', {
    duration:2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.BoxDetails2', {
    duration:2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.slider', {
    duration:2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.title2', {
    duration:2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.job-description', {
    duration:2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.companys', {
    duration:2000,
    origin: 'left',
    distance: '200px',
});


//Slider
document.addEventListener('DOMContentLoaded', function() {
    var carousels = document.querySelectorAll('.boxSlider');

    carousels.forEach(function(carousel, index) {
        var counter = 1;
        setInterval(function() {
            var currentIndex = index + 1; // index for carousel starting from 1
            var radioId = 'radio' + counter + '-' + currentIndex;
            var radioButton = carousel.querySelector('#' + radioId);
            if (radioButton) {
                radioButton.checked = true;
            }
            counter++;
            if (counter > 5) {
                counter = 1;
            }
        }, 5000);
    });
});


//Scroll-behavior, por problemas de compatibilidad

$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
     
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
    }});
  });


// NavCel

var contadorNav = 0;

function openNav(){
    let nav = document.getElementById('navCel');
    let allContent = document.getElementById('divNavCel')
    if(contadorNav == 0){
        nav.style.display = 'flex'
        nav.style.animation = 'translateNavOpen .6s ease'
        allContent.style.display = 'block'
        contadorNav = 1;
    }else{
        nav.style.animation = 'translateNavClose .6s ease'

        setTimeout(() => {
            nav.style.display = 'none'
            allContent.style.display = 'none'
            contadorNav = 0;
        }, 500)
    }
}
