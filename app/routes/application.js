import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({

  model() {
    return EmberObject.create({
      username: null,
      firt_pull_request: null,
      all_pull_requests: null
    })
  }
});
