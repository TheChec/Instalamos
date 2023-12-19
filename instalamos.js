const navBar = document.getElementById('Navbar');
window.sr = ScrollReveal();
//Efecto de la barra de navegación


const LoadNav = (entradas, observer) => {


    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.remove('visible');
        }else{
            entrada.target.classList.add('visible');
        }
    })
}


const observer = new IntersectionObserver( LoadNav, {
    root: null, //Viewport 
    rootMargin: '-150px', //Agregarle margenes al viewport
    threshold: 0.6,
});
observer.observe(navBar);


//Efecto de los divs contenedor de la información basica

sr.reveal('.description1', {
    duration:3000,
    origin: 'left',
    distance: '100px'
});
sr.reveal('.description2', {
    duration:4000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.description3', {
    duration:4000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.title', {
    duration:2000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.BoxDetails2', {
    duration:3000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.slider', {
    duration:3000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.title2', {
    duration:2000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.job-description', {
    duration:3000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.companys', {
    duration:3000,
    origin: 'left',
    distance: '200px'
});

sr.reveal('.footer', {
    duration:1000,
    origin: 'bottom',
    distance: '200px'
});


//Slider

var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},5000);

//Scroll-behavior, por problemas de compatibilidad

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });