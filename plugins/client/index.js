ProtoModule( module, 'client', function ( $axios, cron, core, config, bus ) {
	bus.subscribe( {
		onStart: function () {
			console.log( 'client bus' )
			core.listen( config.PORT )

			var j = cron.scheduleJob( '* * * * * *', function () {
				console.log( 'Client Ping Event' )
				bus.client.triggerPing()
			} )
		}
	} )

	bus.subscribe( 'client', {
		onPing: function () {
			$axios( 'http://localhost:3000/' ).then( ( res ) => {
				console.log( res.data )
			} )
		}
	} )
} )