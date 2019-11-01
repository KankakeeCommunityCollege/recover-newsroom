import ieOnly from './ieOnly.js';
import setDate from './date.js';
import playModal from './playModal.js';
import checkForPound from './jumpLink.js';
import checkForContactsLink from './jumpLinkFix.js';
import newsWidget from './newsWidget.js';

checkForPound();

document.addEventListener('DOMContentLoaded', function() {
  ieOnly();
  checkForContactsLink();
  setDate();
  newsWidget();
  //newsHeader();
  playModal();
});
