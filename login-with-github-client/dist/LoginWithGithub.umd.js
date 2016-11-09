(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.LoginWithGithub = factory());
}(this, (function () { 'use strict';

function initState() {
  return window.crypto.getRandomValues(new Uint8Array(8)).toString();
}

function generateLoginLink({ client_id, state }) {
  return 'https://github.com/login/oauth/authorize?client_id=' + client_id + '&state=' + state;
}

var LoginWithGithub = function ({ client_id }) {
  let state = initState();
  let url = generateLoginLink({ client_id, state });
  let mychild = window.open(url);
  return new Promise(function (resolve, reject) {
    window.addEventListener('message', function (event) {
      // Validate sender
      if (event.source !== mychild) {
        return console.warn('recieved an unexpected postMessage');
      }
      // Validate state
      if (event.data && event.data.state) {
        if (event.data.state !== state) {
          return reject('state variable mismatch');
        }
        resolve({
          client_id: client_id,
          code: event.data.code,
          state: state
        });
      } else {
        reject(event);
      }
    });
  });
};

return LoginWithGithub;

})));
//# sourceMappingURL=LoginWithGithub.umd.js.map
