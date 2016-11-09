(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.LoginWithGithub = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = LoginWithGithub;
  function initState() {
    return window.crypto.getRandomValues(new Uint8Array(8)).toString();
  }

  function generateLoginLink(_ref) {
    var client_id = _ref.client_id,
        state = _ref.state;

    return 'https://github.com/login/oauth/authorize?client_id=' + client_id + '&state=' + state;
  }

  function LoginWithGithub(_ref2) {
    var client_id = _ref2.client_id;

    var state = initState();
    var url = generateLoginLink({ client_id: client_id, state: state });
    var mychild = window.open(url);
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
          resolve(event.data.access_token);
        } else {
          reject(event);
        }
      });
    });
  }
  module.exports = exports['default'];
});