import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      this.store.find('user', {
        name: this.controller.get('name')
      }).then((users) => {
        if(user.get('length') === 1) {
          var user = users.objectAt(0);
          this.controllerFor('application').set('user',user);
          this.transitionTo("notebooks", user.get('id'));
        }
        else {
          console.log('unexpected query result');
        }
      });
    }
  }
});
