import Component from '@ember/component';

export default Component.extend({
  click(e) {
    console.log(e.target);
    
    let hamburger = document.querySelector('.hamburger');

    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      document.querySelector('.side-menu').classList.remove("show-menu");
      document.querySelector('body').classList.remove('stop-scrolling')
      
    } else {
      hamburger.classList.add('active');
      document.querySelector('.side-menu').classList.add("show-menu");
      document.querySelector('body').classList.add('stop-scrolling')
    }
    console.log(hamburger.classList);
  }
});