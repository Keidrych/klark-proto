const td = npm.testdouble
const other = require( './' + significantOther( __filename ) )

describe( 'config: generator', function () {
	let tst
	beforeEach( function () {
		tst = td.object( other.init() )
	} )

	it( 'Ensure correct port', function () {
		td.when( tst.tstFunc() ).thenReturn( 'goodbye' )
		console.log( Object.keys( tst ) )
		expect( tst.tstFunc() ).to.equal( 'hello' )
		// expect( tst.generator.basePath ).to.equal( Object() )
	} )

	it( 'Should configure a port', function () {
		console.log( tst )
		expect( Number.isInteger( tst.PORT ) ).to.equal( true )
	} )

	it( 'Ensure correct port', function () {
		console.log( tst )
		expect( Number.isInteger( tst.PORT ) ).to.equal( true )
	} )
} )