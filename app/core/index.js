ProtoModule( module, 'core', function ( $express, config, bus ) {
	var app = $express()
	app.get( '/', function ( req, res ) {
		res.send( 'Hello World' )
	} )

	bus.subscribe( {
		onStart: function () {
			console.log( 'core bus' )
		}
	} )

	bus.triggerStart()
	return app
	// app.listen( config.PORT )
} )