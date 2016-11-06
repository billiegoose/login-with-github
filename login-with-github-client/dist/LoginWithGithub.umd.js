(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.LoginWithGithub = factory());
}(this, (function () { 'use strict';

function initState() {
  return window.crypto.getRandomValues(new Uint8Array(8)).toString();
}

function generateLoginLink(_ref) {
  var client_id = _ref.client_id,
      state = _ref.state;

  return 'https://github.com/login/oauth/authorize?client_id=' + client_id + '&state=' + state;
}

function waitForPopup(_ref2) {
  var client_id = _ref2.client_id;

  var state = initState();
  var url = generateLoginLink({ client_id: client_id, state: state });
  var mychild = window.open(url);
  new Promise(function (resolve, reject) {
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
}

return waitForPopup;

})));
//# sourceMappingURL=LoginWithGithub.umd.js.map
