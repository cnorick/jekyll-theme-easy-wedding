import { docReady } from './helpers';
import { Collapse } from 'bootstrap';

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
}

function changeNavOnScroll(navbar) {
  const hiddenClass = 'navbar-hidden-top';
  const topNavCollapseClass = 'top-nav-collapse';
  if (navbar.classList.contains(hiddenClass)) {
    const offset = getOffset(navbar);
    if (offset.top > 50) {
      navbar.classList.add(topNavCollapseClass);
    } else {
      navbar.classList.remove(topNavCollapseClass);
    }
  }
}

docReady(() => {
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementsByClassName('nav-link');
  const collapseMenu = document.getElementById('navbar-main-collapse');

  document.addEventListener("scroll", () => changeNavOnScroll(navbar));

  document.getElementById('navbar').addEventListener('show.bs.collapse', (e) => {
    navbar.classList.add('is-expanded');
  });

  document.getElementById('navbar').addEventListener('hide.bs.collapse', (e) => {
    navbar.classList.remove('is-expanded');
  });

  [...navLinks].forEach((link) => {
    link.addEventListener('click', (e) => {
      const bsCollapse = new Collapse(collapseMenu, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });
});