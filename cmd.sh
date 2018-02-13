npm install --global mocha
npm install --save-dev mocha
npm install mocha
mkdir test
vi test/test.js
npm test

mocha
mocha --reporter list --growl

cd /path/to/mocha
npm install
npm test | $REPORTER=nyan npm test

