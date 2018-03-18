import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({

  github: service(),

  classNames: ['pr-card'],

  _parseData() {
    let model = this.get('pr');
    let github = get(this, 'github');
    model.forEach((x) => {
      github.prRepo(x.pull_request.url).then((a) => {
      })
    })
  },

  init() {
    this._super(...arguments);
    // this._parseData();
  }
});
