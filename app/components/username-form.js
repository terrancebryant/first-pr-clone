import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({

  github: service(),

  tagName: 'form',

  classNames: ['username-form'], 

  submit(e) {
    e.preventDefault();
    let github = get(this, 'github');
    let username = get(this, 'user.username');
    github.loadData(username).then((x) => {
      set(this, 'user.firt_pull_request', x.items)
    })
  }
});
