ProtoModule( module, 'client', function ( $axios, cron, core, config ) {

	// create a 'Services' module for remote enabled services and events
	//
	// Levels of engagement
	// - Modue -> local components and their Dependency Injections
	// - Local events
	// - Remote Events (integration)
	//
	// Keep everything as self-contained as possible


	var client = {
		name: 'client',
		events: {
			'core.start' ( payload ) {
				var log = this.logger
				log.info( 'core started: ', payload )
				core.app.listen( config.PORT )

				var j = cron.scheduleJob( '* * * * * *', function () {
					log.info( 'Client Ping Event' )
					core.broker.emit( 'core.ping', true )
				} )
			},
			'core.ping' ( payload ) {
				var log = this.logger
				$axios( 'http://localhost:3000/' ).then( ( res ) => {
					log.info( res.data )
				} )
			}
		}
	}

	core.broker.createService( client )
} )