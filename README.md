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

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});


var testCase = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;

testCase('Array', function() {
  pre(function() {
  });
  
  testCase('#indexOf()', function() {
    assertions('should return -1 when not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

suite('Array');

test('#length', funciton() {
  var arr = [1, 2, 3];
  ok(arr.length == 3);
});

test('#indexOf()', function() {
  var arr = [1, 2, 3];
  ok(arr.indexOf(1) == 0);
  ok(arr.indexOf(2) == 1);
  ok(arr.indexOf(3) == 2);
});

suite('String');

test('#length', function() {
  ok('foo'.length == 3);
});

module.exports = {
  before: function() {
  },
  
  Array: {
    '#indexOf()': {
      'should return -1 when not present': function() {
        [1, 2, 3].indexOf(4).should.equal(-1);
      }
    }
  }
};
```

