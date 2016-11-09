<template>
  <div id="app" style="height: 100%">
    <div>
      <h3>Bootstrap example:</h3>
      <p>Since Bootstrap is so popular, the default buttons have Bootstrap styles applied.</p>
      <blockquote>
        <login-with-github client_id="2e65f688150e32999dad"></login-with-github>
      </blockquote>
<pre><code class="language-html">&lt;login-with-github client_id="2e65f688150e32999dad"&gt;&lt;/login-with-github&gt;</code></pre>
    </div>
    <hr>
    <div>
      <h3>Semantic UI example:</h3>
      <p>I have recently fallen in love with semantic-ui. This example uses Vue slots to override the default buttons.</p>
      <blockquote>
        <login-with-github client_id="2e65f688150e32999dad">
          <button slot="login" class="ui primary button">
            <i class="github icon"></i> Sign In
          </button>
          <button slot="logout" class="ui button">
            <i class="github icon"></i> Sign Out
          </button>
        </login-with-github>
      </blockquote>
<pre><code class="language-html">&lt;login-with-github client_id="2e65f688150e32999dad"&gt;
  &lt;button slot="login" class="ui primary button"&gt;
    &lt;i class="github icon"&gt;&lt;/i&gt; Sign In
  &lt;/button&gt;
  &lt;button slot="logout" class="ui primary button"&gt;
    &lt;i class="github icon"&gt;&lt;/i&gt; Sign Out
  &lt;/button&gt;
&lt;/login-with-github&gt;
</code></pre>
    </div>
    <hr>
    <div>
      <h3>Custom example:</h3>
      <p>This demonstrates the flexibility of the Vue slot mechanism. You can put whatever HTML you want inside the component.</p>
      <blockquote>
        <login-with-github client_id="2e65f688150e32999dad" class="example3">
          <a slot="login">Log In<img src="http://www.animatedimages.org/data/media/111/animated-arrow-image-0044.gif"></a>
          <a slot="logout">Sign Out</a>
        </login-with-github>
      </blockquote>
<pre><code class="language-html">&lt;login-with-github client_id="2e65f688150e32999dad" style="font-family: monospace; text-decoration: underline;"&gt;
  &lt;a slot="login"&gt;Log In &lt;img src="http://www.animatedimages.org/data/media/111/animated-arrow-image-0044.gif"&gt;&lt;/a&gt;
  &lt;a slot="logout"&gt;Sign Out&lt;/a&gt;
&lt;/login-with-github&gt;
</code></pre>
    </div>
  </div>
</template>

<script>
require('prismjs')
export default {
  data () {
    return {}
  },
  components: {
    'login-with-github': require('@wmhilton/login-with-github-vue-component')
  }
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/themes/prism.css";
#app {
  margin: 20px;
}
.example3 a {
  font-family: monospace;
  text-decoration: underline;
  color: blue;
  transition: 1s;
}
.example3 a:hover {
  background: blue;
  color: white;
}
</style>
