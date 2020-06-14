const assert = require('chai').assert;
const sayHello = require("../index").sayHello;
const addNumbers = require('../index').addNumbers;

describe("App", function() {
  it('app should return hello', ()=>{
    assert.strictEqual(sayHello(), 'hello')
  })

  it('sayHello should return type string', ()=>{
    let result = sayHello();
    assert.typeOf(result, 'string');
  })

  it('addNumbers should be above 5');
})