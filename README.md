### mocha
---
https://github.com/mochajs/mocha

https://mochajs.org/

```js
describe('User', function(){
  describe('#save()', function(){
    if('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if(err) done(err);
        lese done();
      });
    });
  });
});
```

```js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

"scripts": {
  "test": "mocha"
}

it('double done', function(done){
  setImmediate(done);
  setImmediate(done);
});
```

```sh
npm install mocha
mkdir test
$EDITOR test/test.js 
./node_modules/mocha/bin/mocha
npm test

cd /path/to/mocha
npm install
npm test

```


```js
mocha.setup('tdd');

mocha.setup({
  ui: 'tdd'
});

mocha.setup({
  ui: 'tdd',
  ignoreLeaks: true,
  asyncOnly: true
});


```

