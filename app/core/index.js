ProtoModule( module, 'core', function ( $express, config, broker ) {
	var app = $express()

	app.listen( config.PORT )

	app.get( '/', function ( req, res ) {
		res.send( 'Hello World' )
	} )

	broker.createService( {
		name: 'core',
		actions: {
			addRoute( ctx ) {
				app.use( ctx.params )
				ctx.emit( 'core.addRoute' )
			}
		},
		events: {
			'core.addRoute' () {
				this.logger.info( 'Broker: core route added' )
			}
		},
		started() {
			this.logger.info( 'Broker: Service added - core' )
		}
	} )
} )