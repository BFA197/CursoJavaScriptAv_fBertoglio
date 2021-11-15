function foo( x ) { return 2 * x; }
function bar( y ) { return foo( y + 5 ) - 10; }
console.log( bar( 15 ) );
function fn_MostrarArray(cb, tiempo){
  if ( !cb || !( typeof cb === 'function' ) ) {
      throw new Error( 'Invalid callback. Please provide a function.' );
  }
  setTimeout( cb, tiempo );
}
