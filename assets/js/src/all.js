import ieOnly from './ieOnly.js';
import setDate from './date.js';
import newsWidget from './newsWidget.js';
import navbarScroll from './navbarScroll.js';
import playModal from './playModal.js';
import checkForPound from './jumpLink.js';

checkForPound();
navbarScroll();

document.addEventListener('DOMContentLoaded', function() {
  ieOnly();
  setDate();
  newsWidget();
  playModal();
});
