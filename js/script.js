'use strict';

const navbarCollapse = document.querySelector('.navbar-collapse.collapse');
const navbar = document.querySelector('.navbar.navbar-expand-lg');

const collapseNavbar = event => {
  const target = event.target;
  if (target.classList.contains('nav-link') && navbarCollapse.classList.contains('show')) {
    new window.bootstrap.Collapse(navbarCollapse);
  }
};

//992 === .navbar-expand-lg
const collapseOnWidth = event => {
  if (navbar.clientWidth >= 992) {
    new window.bootstrap.Collapse(navbarCollapse);
  }
};

navbarCollapse.addEventListener('show.bs.collapse', () => {
  window.addEventListener('resize', collapseOnWidth);
});

navbarCollapse.addEventListener('hide.bs.collapse', () => {
  window.removeEventListener('resize', collapseOnWidth);
});

navbarCollapse.addEventListener('click', collapseNavbar);

