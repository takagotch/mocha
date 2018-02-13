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





//inclusive tests


