import FoundationBase from './foundation-base';

export default FoundationBase.extend({
  classNames: ['fixed'],
  actions: {
    toggleSidebar: function(){
      this.toggleProperty('sidebar');
    }
  }
});
