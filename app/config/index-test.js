var config;
var _;
var expect;

KlarkModule( module, 'configTest', function ( $chai, ___, _config_ ) {
	config = _config_;
	_ = ___;
	expect = $chai.expect;
} );

describe( 'config', function () {
	it( 'Should configure a port', function () {
		expect( _.isNumber( config.PORT ) ).to.equal( true );
	} );
} );