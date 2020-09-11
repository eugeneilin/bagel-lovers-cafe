const mainNav = document.getElementById('main-nav');

// Shrink navbar when user scrolls on desktop
function shrinkNavbar() {
  if (
    (document.body.scrollTop > 250 && window.innerWidth > 900) ||
    (document.documentElement.scrollTop > 250 && window.innerWidth > 900)
  ) {
    document.getElementById('logo').style.marginTop = '-100px';
  } else {
    document.getElementById('logo').style.marginTop = '';
  }
}

// Add background and shadow to navbar when user scrolls
function navbarBackground() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    mainNav.style.backgroundColor = 'rgba(18, 32, 8, 0.7)';
    mainNav.style.boxShadow = '0 0 .5em rgba(18, 32, 8, 0.7)';
  } else {
    mainNav.style.backgroundColor = '';
    mainNav.style.boxShadow = '';
  }
}

// when user scrolls, invoke navbar functions
window.onscroll = function () {
  shrinkNavbar();
  navbarBackground();
};

// Switch 'current' class as user scrolls
function switchCurrentClass() {
  const sectionLinks = document.querySelectorAll('.section-link');
  const section = document.querySelectorAll('section');

  let i = section.length;

  while (--i && window.scrollY + 65 < section[i].offsetTop) {}
  sectionLinks.forEach((sectionLink) =>
    sectionLink.classList.remove('current')
  );
  sectionLinks[i].classList.add('current');
}

switchCurrentClass();

window.addEventListener('scroll', switchCurrentClass);

// Turn off 'current' class when user is at the top
function noClass() {
  let header = document.querySelector('header');
  const removeClass = () => header.classList.remove('current');

  if (window.scrollY < header.offsetTop) {
    removeClass();
  }
}

noClass();

// Hamburger Menu Navigation Controls
// Close menu when user clicks on link
function closeHBMenu() {
  const toggler = document.querySelector('.toggler');

  toggler.click();
}

// TODO: Add space above the sections, when user clicks on links in nav
