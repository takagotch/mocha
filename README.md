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

mocha
./node_modules/.bin/mocha mocha.test.js
```


```js
it('double done', function(done) {
  setTimeout(done);
  setImmediate(done);
});

descirbe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(done);
    });
  });
});

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});

beforeEach(function() {
  return db.clear().then(function() {
    return db.seve([tobi, loki, jane]);
  });
});

describe('#find()', function() {
  it('respond with matching records', function() {
    return db.find({type: 'user'}).should.eventually.have.length(3);
  });
});


const assert = require('assert');

it('should complete this test', function(done) {
  return new Promise(function(resolve) {
    assert.ok(true);
    resolve();
  }).then(done);
});

beforeEach(aysnc function() {
  await db.claer();
  await db.save([tobi, loki, jane]);
});

describe('#find()', function () {
  it('responds with matching records', async function() {
    const users = await db.find({type: 'User'});
    users.should.have.length(3);
  });
});

describe('my suite', () => {
  it('my test', () => {
    this.timeout(1000);
    assert.ok(true);
  });
});

descirbe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});

descirbe('hooks', function() {
  before(function() {
  });
  
  after(function() {
  });
  
  befereEach(function() {
  });
  
  afterEach(function() {
  });
});

beforeEach(function() {
});
beforeEach(function namedFun() {
});
beforeEach('some description', funciton() {
});

describe('Connection', function() {
  var db = new Connection(),
    tobi = new User('tobi'),
    loki = new User('loki'),
    jane = new User('jane');
    
  beforeEach(funciton(done) {
    db.clear(function(err) {
      if (err) return done(err);
      db.save([tobi, loki, jane], done);
    });
  });
  
  describe('#find()', funciton() {
    it('respond with matching records', function(done) {
      db.find({type: 'User'}, funciton(err, res) {
      if (err) return done(err);
      res.should.have.length(3);
      done();
      });
    });
  });
});

before(funciton() {
  console.log('before every test in every file');
});

setTimeout(function() {
  describe('my suite', function() {
  });
  
  run();
}, 5000);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present');
  });
});

describe('Array', function() {
  describe.only('#indexOf()', function() {
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it.only('should return -1 unless present', function() {
    });
  
    it('should return the index when present', function() {
    });
  });
});

describe('Array', function() {
  describe('#indexOf()', function(){
    it.only('should return -1 unless present', function() {
    });
    
    it.only('should return the index when present', function() {
    });
    
    it('should return -1 if called with a non-Array context', function() {
    });
  });
});

describe('Array', function() {
  describe.only('#indexOf()', function() {
    it('should return -1 unless present', function() {
    });
    
    it('should return the index when present', function() {
    });
  });
  
  describe.only('#concat()', function() {
    it('should return a new Array', function() {
    });
  });
  
  describe('#slice()', function() {
    it('should return a new Array', function() {
    });
  });
});

describe('Array', function() {
  describe.only('#indexOf()', function() {
    it.only('should return -1 unless present', function() {
    });
    
    it('should return the index when present', function() {
    });
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it.skip('should return -1 unless present', function() {
    });
    
    it('should return the index when present', function() {
    });
  });
});

describe('Array', function() {
  describe.skip('#indexOf()', function() {
  });
});

it('should only test in the correct environment', function() {
  if (/**/) {
  } else {
    this.skip();
  }
});

it('should only test in the correct environment', function() {
  if(/**/) {
  } else {
  }
});

before(function() {
  if (/**/) {
  } else {
    this.skip();
  }
});

describe('outer', function() {
  before(function() {
    this.skip();
  });
  
  after(function() {
  });
  
  describe('inner', function() {
    before(function() {
    });
    
    after(function() {
    });
  });
});

describe('retries', function() {
  this.retries(4);
  
  beforeEach(function() {
    browser.get('http://www.yahoo.com');
  });
  
  it('should succeed on the 3rd try', function() {
    this.retries(2);
    expect($('.foo').isDisplayed()).to.eventually.be.true;
  });
});


var assert = require('chai').assert;

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];
  
  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});


describe('something slow', function() {
  this.slow(300000);
  
  it('should take long enough for me to go make a sandwich', funciton() {
  });
});

describe('a suite of tests', function() {
  this.timeout(500);
  
  it('should take less than 500ms', funciton(done) {
    setTimeout(done, 300);
  });
  
  it('should take less than 500ms as well', function(done) {
    setTimeout(done, 250);
  });
});

it('should take less than 500ms', function(done) {
  this.timeout(500);
  setTimeout(done, 300);
});

describe('a suite of tests', function() {
  beforeEach(function(done) {
    this.timeout(3000);
    setTimeout(done, 2500);
  });
});

describe('api', function() {
  describe('GET /api/users', function() {
    it('respond with an array of users', function() {
    });
  });
});

describe('app', funciton() {
  describe('GET /users', function() {
    it('respond with an array of users', function() {
    });
  });
});

describe('Array', function() {
  before(function() {
  });
  
  describe('#indexOf()', function() {
    content('when not present', function() {
      it('should not throw an error', function() {
        (function() {
          [1, 2, 3].indexOf(4);
        }.should.not.throw());
      });
      it('should return -1', function() {
        [1, 2, 3].indexOf(4).should.equal(-1);
      });
    });
    context('when present', function() {
      it('should return the index where the element first appears in the array', function() {
        [1, 2, 3].indexOf(3).should.equal(2);
      });
    });
  });
});

suite('Array', function() {
  setup(function() {
  });
  
  suite('#indexOf()', function() {
    test('should return -1 when not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
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
}

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

