import Service from '@ember/service';
import fetch from 'fetch';

export default Service.extend({

  loadData(username) {
    let url = 'https://api.github.com/search/issues?q=type:pr+author:"'+username+'"+-user:"'+username+'"'

    // let url = 'https://api.github.com/search/issues?q=type:pr+author:"'+username+'"+-user:"'+username+'"&sort=created&order=asc&per_page=1'
    return fetch(url).then((resp) => {
      return resp.json();
    })
  },

  allPullRequests() {
    let url = 'https://api.github.com/search/issues?q=type:pr+author:"'+username+'"+-user:"'+username+'"'
    return fetch(url).then((resp) => {
      return resp.json();
    })
  },

  prRepo(repoUrl) {
    let url = repoUrl;
    // let url = 'https://api.github.com/repos/code-corps/code-corps-ember/issues/1222';
    return fetch(url).then((resp) => {
      return resp.json();
    })
  }
});
