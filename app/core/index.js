ProtoModule( module, 'core', function ( $express, config, $moleculer ) {
	var app = $express()
	var broker = new $moleculer.ServiceBroker( {
		namespace: 'core',
		logger: console
	} )

	app.get( '/', function ( req, res ) {
		res.send( 'Hello World' )
	} )

	// bus.subscribe( {
	// 	onStart: function () {
	// 		console.log( 'core bus' )
	// 	}
	// } )

	// broker.on( 'core.start', () => {
	// 	console.log( 'core started' )
	// } )
	broker.start().then( () => {
		broker.repl()
		broker.emit( 'core.start' )
	} )

	return {
		app,
		broker
	}
	// app.listen( config.PORT )
} )