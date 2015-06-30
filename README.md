# AngularJS 2 App

<pre>$ npm install -g tsd@^0.6.0</pre>
<pre>$ tsd install angular2 es6-promise rx rx-lite</pre>

<h2>Terminal 1</h2>
<pre>$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts</pre>

<h2>Terminal 2</h2>
<pre>$ http-server</pre>