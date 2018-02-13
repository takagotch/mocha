var assert = require('assert');
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.eaual([1,2,3].indexOf(4), -1);
    });
  });
});

//done()
it ('double done', function(done){
  setImmediate(done);
  setImmediate(done);
});

//asynchoronous
describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if(err) done(err);
	else done();   
	      //new Error()
	      //user.save(done);
      });
    });
  });
});

//workerng with promises
beforeEach(function(){
  return db.clear()
	.then(function(){
	  return db.save([tobi, loki, jane]);
	});
});

describe('#find()', function(){
  it('respond with matching records', function(){
    return db.find({ type: 'User' }).shoud.eventually.have.length(3);
  });
});

const assert = require('assert');
it('should complete this test', function(done){
  return new Promise(function(resolve){
    assert.ok(true);
    resolve();
  });
	.then(done);
});

//async/await
beforeEach(async function(){
  await db.clear();
  await db.save([tobi, loki, jane]);
});

describe('#find()', function(){
  it('responds with matching records', async function(){
    const users = await db.find({ type: 'User' });
    users.should.have.length(3);
  });
});

//synchronous
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});

//arrow functions
describe('my suite', () => {
  it('my test', () => {
    this.timeout(1000);
    assert.ok(true);
  });
});

//hooks
describe('hooks', function(){
  before(function(){
    //
  });
  after(function(){
    //
  });
  beforeEach(function(){
    //
  });
  afterEach(function(){
    //
  });
	//...
});

//describing hooks
beforeEach(function(){
  //
});
beforeEach(function namedFun(){
  //
});
beforeEach('some description', function(){
  //
});

//asynchronous hooks
describe('Connection', function(){
  var db = new Connection,
    tobi = new User('tobi'),
    loki = new User('loki');
    jane = new User('jane');

  beforeEach(function(done){
    db.clear(function(err){
      if(err) return done(err);
      db.save([tobi, loki, jane]);
    });
  });
  describe('#fine()', function(){
    it('respond with matching records', function(done){
      db.find({type: 'User'}, function(err, res){
        if(err) return done(err);
        res.should.have.length(3);
        done();
      });
    });
  });
});


//root-level hooks
beforeEach(function(){
  console.log('before every test in every file');
});

//delayed root suite
setTimeout(function(){
  describe('my suite', function(){
    //
  });
  run();
}, 5000);

//pending tests
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present');
  });
});

//exclusive tests
describe('Array', function(){
  describe.only('#indexOf()', function(){
    //
  });
});

describe('Array', function(){
  describe('#indexOf()', function(){
    it.only('should return -1 unless present', function(){
      //
    });
    it('should return the index when present', function(){
      //
    })
  });
});

describe('Array', function(){
  describe('#indexOf()', function(){
    it.only('should return -1 unless present', function(){
      //
    });
    it.only('', function(){
      //
    });
    it('', function(){
      //
    });
  });
});

describe('Array', function(){
  describe.only('#indexOf()', function(){
    it('should return -1 unless present', function(){
      //
    });
    it('should return the index when present', function(){
      //
    });
  });
  
  describe.only('#concat()', function(){
    it('should return a new Array', function(){
      //
    });
  });
});

describe('Array', function(){
  describe.only('#indexOf()', function(){
    it.only('should return -1 unless present', function(){
      //
    });
    it('should return the index when present', function(){
      //
    });
  });
});


//inclusive tests
describe('Array', function(){
  describe.skip('#indexOf()', function(){
    it.skip('should return -1  unless present', function(){
      //
    });
    it('should return -1 when present', function(){
      //
    });
  });
});

it('should only test in the correct environment', function(){
  if(/*env check*/){
    //
  }else{
    this.skip();
  }
});


it('should only test in the correct environment', function(){
  if(/*env check*/){
    // make assrtions
  }else{
    //
  }
});

before(function(){
  if(/*env check*/){
    //setup 
  }else{
    this.skip();
  }
});

//retry tests
describe('retries', function(){
  this.retries(4);
  beforeEach(function(){
    browser.get('http://www.yahoo.com');
  });
  it('should succeed on the 3rd try', function(){
    this.retries(2);
    expect($('.foo').isDisplayed()).to.eventually.be.true;
  });
});

//dynamically generating tests
var assert = require('chai').assert;
function add(){
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr){
    return prev + curr;
  }, 0);
}
describe('add()', function(){
  var tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];
  tests.forEach(function(test){
    it('correctly adds' + test.args.length + ' args', function(){
      var res = add.apply(null, test.args);
      assert.equla(res, test.expected);
    });
  });
});

//test duration
describe('something slow', function(){
  this.slow(10000);
  it('should take long enough for me to go make a sandwitch', function(){
    //
  });
});

//timeout
//suite-level
describe('a suite of tests', function(){
  this.timeout(500);
  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });
  it('should take less than 500ms as well', function(done){
    setTimeout(done, 250);
  });
});

//test-level
it('should take less than 500ms', function(done){
  this.timeout(500);
  setTimeout(done, 300);
});

//hook-level
describe('a suite of tests', function(){
  beforeEach(function(done){
    this.timeout(3000);
    setTimeout(done, 2500);
  });
});


//diffs
describe('api', function(){
  describe('GET /api/users', function(){
    it('res with an array of users', function(){
      //
    });
  });
});
describe('app', function(){
  describe('GET /users', function(){
    it('res with an array of users', function(){
      //
    });
  });
});

//interfaces
//bdd
describe('Array', functin(){
  before(function(){
    //
  });
  describe('#indexOf()', function(){
    context('when not present', function(){
      it('should not throw an error', function(){
        (function(){
	  [1,2,3]/indexOf(4);
	}).should.not.throw();
      });
      it('should return -1', function(){
        [1,2,3].indexOf(4).should.equal(-1);
      });
    });
    context('when present', function(){
      it('should return the index where the element first appears in the array', function(){
        [1,2,3].indexOf(3).should.equal(2);
      });
    });
  });
});

//tdd
suite('Array', function(){
  setup(function(){
    //
  });
  suite('#indexOf()', function(){
    test('should return -1 when not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

//exports
module.exports = {
  before: function(){
    //
  },
  'Array':{
    '#indexOf()':{
      'should return -1 when not present': function(){
        [1,2,3].indexOf(4).should.equal(-1);
      }
    }
  }
};

//qunit
function ok(expr, msg){
  if(!expr) throw new Error(msg);
}
suite('Array');
test('#length', function(){
  var arr = [1,2,3];
  ok(arr.length == 3);
});
test('#indexOf()', function(){
  var arr = [1,2,3];
  ok(arr.indexOf(1) == 0);
  ok(arr.indexOf(2) == 1);
  ok(arr.indexOf(3) == 2);
});
suite('String');
test('#length', function(){
  ok('foo'.length == 3);
});

//require
var testCase = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;

testCase('Array', function(){
  pre(function(){
    //
  });
  
  testCase('#indexOf()', function(){
    assertions('should return -1 when not present', function(){
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});


//reporters
//doc
descrivew('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});

//mocha --reporter doc array
<section class="suite">
<h1>Array</h1>
<dl>
<section class="suite">
<h1>#indexOf()</h1>
	<dl>
	<dt>should return -1 when the value is not present</dt>
	<dd><pre><code>[1,2,3].indexOf(5).should.equal(-1);
	[1,2,3].indexOf(0).should.equal(-1);</code></pre></dd>
	</dl>
</section>
</dl>
</section>

//mocha --repoter=doc | cat docs/head.html - docs/tail.htlm > docs/test.html

//browser-spec methods
mocha.chekLeaks();
mocha.globals(['jQuery']);
mocha.run();

//mocha.setup()
mocha.setup('tdd');

mocha.setup({
  ui: 'tdd'
});

mocha.setup({
  ui: 'tdd',
  ignoreLeaks: true,
  asyncOnly: true
});


