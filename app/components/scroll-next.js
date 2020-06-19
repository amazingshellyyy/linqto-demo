import Component from '@ember/component';

export default Component.extend({
  click() {
    console.log('hi')
    window.scroll({
      top: 650,
      behavior: 'smooth'
    });
  }
});