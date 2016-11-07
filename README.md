# WORK IN PROGRESS (aka Doesn't Work Yet)

# login-with-github-component

There are three or more parts:

- a server-side middleware that handles part of the OAuth 2-step process (this is unavoidable I'm afraid, see explanation below)
- an implementation of a server that runs that middleware and only that middleware that you can instantly host using `now`
- a browser-side JavaScript client library that handles logging in with Github and the server
- a Vue component that implements a "Login With Github" button that uses the browser-side client library

If you're building a single page app (like I am) this is a fact - you
*need* a server-side component. This is because you application secret,
which proves that the login request is legitimately coming from your application
and not a cross-site request attack, must be kept secret from the browser.
But fear not! I have an easy solution for you, and it's free!

## Using the login-with-github component

This is a Vue component you can embed in your application

Node usage:

    oauth = require('.')
    app.post('/authenticate', oauth({
      client_secret:
      authorization_url:
    })

Browser usage:

    <script src="js/GithubLogin.umd.js"></script>

Browserify / Webpack usage:

    GithubLogin = require('.')

Rollup usage:

    import GithubLogin from '.'

## Inspiration
- http://github.com/prose/gatekeeper pretty much what I wanted, except I thought I'd rewrite it without the PHP for fun
- https://github.com/vjeux/GithubLogin http://blog.vjeux.com/2012/javascript/github-oauth-login-browser-side.html
  I never would have figured out how to do this if not for this article
- https://zeit.co/now which I had been looking for a project to use with, and Github OAuth server struck me as a brilliant use.

## example vue project

NOTE: uses `vbuild`

