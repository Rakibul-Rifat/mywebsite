const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

var i = 0;
var txt = 'Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff. Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff. Sad do eiusmod tempor incidiunt ut lbore et lodore magna ahlfhe, ehfhe ipd uj relshudff..';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

var typed = new Typed('#typing', {
  strings: ['Web Designer &', 'Frontend Developer.'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,

});
var typed2 = new Typed('#typed2', {
  strings: ['Thank you!!!!!','Have a nice day...'],
  typeSpeed: 0,
  backSpeed: 0,
  fadeOut: true,
  loop: true
});
