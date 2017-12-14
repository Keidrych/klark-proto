var ns = {}
const debug = npm.debug( getModuleName( __filename, __dirname ) )

ns.load = () => {
	debug( 'loaded' )
	// ns.init()
}

ns.init = () => {
	debug( 'inited' )
	let path = require( 'upath' )
	var basePath = path.normalize( process.cwd() )

	var tstFunc = () => {
		return 'hello'
	}

	return {
		tstFunc: tstFunc,
		generator: {
			basePath: ( ( process.env.NODE_ENV === 'development' ) ? path.normalize( process.cwd() ) : '/' ),
			generatedPath: path.join( basePath, '/generated' ),
			defaultPath: path.join( basePath, '/default' ),
			deployPath: path.join( basePath, '/deploy' ),
		},
		PORT: 3000
	}
}

module.exports = ns