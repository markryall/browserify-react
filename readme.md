# sample react and browserify application

- created package.json
- npm install --save browserify
- npm install --save react
- npm install --save reactify
- npm install --save uglifyjs
- npm install --save superagent
- npm install --save lodash
- npm install --save moment
- browserify -t reactify src/main.js -o scripts.js
- browserify -t reactify src/main.js | uglify > scripts.js
- python -m SimpleHTTPServer
- [open](http://localhost:8000)
