'use strict'
require( './globals' )

// Globals
global.broker = new npm.moleculer.ServiceBroker( {
	namespace: 'proto',
	logger: console
} )

// Variables
const debug = npm.debug( 'root' )
const PluginLoader = npm[ 'plugin-loader' ].PluginLoader
const appPath = npm.path.join( npm.path.normalize( process.cwd() ), 'app' )
const loader = new PluginLoader( [ appPath ] )

// Init / start applications
broker.start().then( () => {
	broker.repl()
} )

loader.on( 'pluginLoaded', function ( pluginName, plugin ) {
	// at this point, if the module implements a load() method, it has been invoked already
	debug( pluginName + ' loaded!' )
	// store module init() result in relevant global value for sharing with other modules
	debug( npm.path.trimExt( pluginName ) )
	global[ npm.path.trimExt( pluginName ) ] = plugin.init()
} )

loader.on( 'pluginUnloaded', function ( pluginName, plugin ) {
	// at this point, if the module implements an unload() method, it has been invoked already
	debug( pluginName + ' unloaded!' )
	// plugin.doSomethingToCleanup( ... )
} )

loader.discover()