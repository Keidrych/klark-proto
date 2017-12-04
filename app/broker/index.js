ProtoModule( module, 'broker', function ( $moleculer ) {
	var broker = new $moleculer.ServiceBroker( {
		namespace: 'proto',
		logger: console
	} )

	broker.start().then( () => {
		broker.repl()
	} )

	return broker
} )