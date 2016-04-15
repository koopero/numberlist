module.exports = numberlist

const _ = require('lodash')

function numberlist( ) {
  const list = Object.create( numberlist.prototype )
  list.length = 0

  list.insert = function() {
    _( arguments )
      .flatten()
      .filter( _.isNumber )
      .map( _insert )

    function _insert( num ) {
      // @TODO SO NOT THE RIGHT WAY!
      if ( numbers.indexOf( num ) == -1 ) {
        numbers.push( num )
        numbers.sort()
        list.length = numbers.length
      }
    }
  }

  list.max = function( ) {
    if ( !length )
      return NaN
  }

  return list
}
