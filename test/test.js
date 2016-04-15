const numberlist = require('../index')

const assert = require('chai').assert

describe('init', function () {
  it('will not smork', function () {
    var list = numberlist()
    assert.isFunction( list.max )
    assert.equal( list.length, 0 )
  })
})
