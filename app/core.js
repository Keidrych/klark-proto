var ns = {}
const debug = npm.debug( getModuleName( __filename, __dirname ) )

ns.load = () => {
	debug( Object.keys( global[ 'config' ] ) )
	var app = express()

	var port = 0

	if ( process.env.HEADLESS ) {
		port = 8080
	}

	if ( !module.parent ) {
		app.listen( port, () => {
			console.log( `Listening on localhost:${port}` )
		} )
	}

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
}

module.exports = ns