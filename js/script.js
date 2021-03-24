// 'use strict';

const NAVBAR_EXPAND_LG = 992; //the Bootstrap threshold for expend the navbar 
const navbarCollapse = document.querySelector('.navbar-collapse.collapse');
const navbar = document.querySelector('.navbar.navbar-expand-lg');

const collapseNavbar = event => {
  const target = event.target;
  if (target.classList.contains('nav-link') && navbarCollapse.classList.contains('show')) {
    new window.bootstrap.Collapse(navbarCollapse);
  }
};

const collapseOnWidth = event => {
  if (navbar.clientWidth >= NAVBAR_EXPAND_LG) {
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
