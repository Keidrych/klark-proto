let debug = npm.debug( getModuleName( __filename, __dirname ) )

module.exports = {
	load: function () {
		debug( 'broker load() executed' )
		// },
		// init: function ( moleculer ) {
		// 	global.broker = new moleculer.ServiceBroker( {
		// 		namespace: 'proto',
		// 		logger: console
		// 	} )
		//
		// 	broker.start().then( () => {
		// 		broker.repl()
		// 	} )
		//
		// 	return broker
	}
}