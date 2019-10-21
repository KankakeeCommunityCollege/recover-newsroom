import ieOnly from './ieOnly.js';
import setDate from './date.js';
import playModal from './playModal.js';
import checkForPound from './jumpLink.js';
import newsHeader from './newsHeader.js';
import checkForContactsLink from './jumpLinkFix.js';

checkForPound();

document.addEventListener('DOMContentLoaded', function() {
  ieOnly();
  checkForContactsLink();
  setDate();
  //newsWidget();
  playModal();
  newsHeader();
});
