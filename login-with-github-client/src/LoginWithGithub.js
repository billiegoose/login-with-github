"use strict"

function initState () {
  return window.crypto.getRandomValues(new Uint8Array(8)).toString()
}

function generateLoginLink ({client_id, state, scope}) {
  let link = 'https://github.com/login/oauth/authorize?client_id=' + client_id + '&state=' + state
  if (typeof scope === 'string') {
    link += '&scope=' + scope
  }
  return link
}

export default function LoginWithGithub ({client_id, scope}) {
  let state = initState()
  let url = generateLoginLink({client_id, state, scope})
  let mychild = window.open(url)
  return new Promise(function(resolve, reject) {
    window.addEventListener('message', function (event) {
      // Validate sender
      if (event.source !== mychild) {
        return console.warn('recieved an unexpected postMessage')
      }
      // Validate state
      if (event.data && event.data.state) {
        if (event.data.state !== state) {
          return reject('state variable mismatch')
        }
        resolve(event.data.access_token)
      } else {
        reject(event)
      }
    })
  })
}
