ProtoModule( module, 'client', function ( $axios, cron, core, config ) {
	var schedule = cron

	core.listen( config.PORT )

	var j = schedule.scheduleJob( '* * * * * *', function () {
		$axios( 'http://localhost:3000/' ).then( ( res ) => {
			console.log( res.data )
		} )
	} )
} )