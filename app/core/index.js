ProtoModule( module, 'core', function ( $express, config ) {
	var app = $express()
	app.get( '/', function ( req, res ) {
		res.send( 'Hello World' )
	} )

	return app
	// app.listen( config.PORT )
} )