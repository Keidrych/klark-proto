ProtoModule( module, 'client', function ( $axios, cron, broker ) {

	// create a 'Services' module for remote enabled services and events
	//
	// Levels of engagement
	// - Modue -> local components and their Dependency Injections
	// - Local events
	// - Remote Events (integration)
	// - each module is an event bus
	//
	// Keep everything as self-contained as possible

	// use 'namespace variable to define public event driven API'
	var ns = {}


	// Moleculer Auto-Registration for Plugin Auto-Discovery
	broker.createService( {
		name: 'client',
		// action = communicate with a specific endpoint and expect a response
		actions: {
			ping( ctx ) {
				var log = this.logger
				return $axios( 'http://localhost:3000/' ).then( ( res ) => {
					return res.data

				} )
			}
		},
		// events = need to know something somewhere has happenend and look after my own stuff
		events: {
			'core.start' ( payload ) {
				var log = this.logger
				log.info( 'core started: ', payload )
				// core.app.listen( config.PORT )

				var j = cron.scheduleJob( '* * * * * *', function () {
					log.info( 'Client Ping Event' )
					broker.emit( 'client.ping', true )
				} )
			},
			'client.ping' ( ctx ) {
				broker.call( 'client.ping' ).then( res => this.logger.info( res ) )
			}
		},
		started() {
			broker.emit( 'core.start' )
		}
	} )
} )