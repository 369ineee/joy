//Navigation Bar 
let prevScrollpos = window.pageYOffset;
const header = document.querySelector(".head1");

window.addEventListener("scroll", function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // scrolling up
    header.style.top = "0";
    header.classList.add("show");
  } else {
    // scrolling down
    header.style.top = "-100px"; // Hide the header
    header.classList.remove("show");
  }
  prevScrollpos = currentScrollPos;
});

// Anchor Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});