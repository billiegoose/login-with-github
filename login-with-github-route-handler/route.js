"use strict"
const request = require('superagent')

error_template = (msg) => `<html><body><pre>msg</pre></body></html>`

success_template = (body) => `<html>
<body>
  <script>
    window.opener.postMessage(${JSON.stringify(body)}, '*')
    window.close()
  </script>
</body>
</html>`

const routeHandler = (options) => {
  return (req, client_res) => {
    request.post(options.authorization_url)
    .send({
      client_id: options.client_id,
      client_secret: options.client_secret,
      code: req.params.code,
      state: req.params.state
    })
    .accept('json')
    .end((github_res) => {
      if (!github_res.ok) {
        return client_res.status(500).type('html').send(error_template(`Error ${github_res.status}: ${github_res.statusText}`))
      }
      if (github_res.body.error) {
        return client_res.status(400).type('html').send(error_template(`Error 400: ${JSON.stringify(github_res.body, null, 2)}`))
      }
      return client_res.status(200).type('html').send(success_template({
        state: req.params.state,
        access_token: github_res.body.access_token
      })
    })
  }
}
module.exports = routeHandler
