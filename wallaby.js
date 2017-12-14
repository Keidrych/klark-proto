module.exports = () => {
	return {
		files: [
			// 'app/**/*.js',
			// {
			// 	pattern: 'app/**/*-test.js',
			// 	ignore: true
			// },
			// 'plugins/**/*.js', {
			// 	pattern: 'plugins/**/*-test.js',
			// 	ignore: true
			// },
			// {
			// 	pattern: 'config.js',
			// 	instrument: false
			// }
			'app/**/*.js',
			'!app/**/*.test.js',
			{
				pattern: '*.js',
				instrument: false
			},
			{
				pattern: '*.json',
				instrument: false
			}
		],
		tests: [
			'app/**/*.test.js'
			// 'app/**/*-test.js',
			// 'plugins/**/*-test.js'

		],
		env: {
			type: 'node',
			runner: 'node',
			params: {
				runner: '--harmony',
				env: 'NODE_ENV=development'
			}
		},
		// workers: {
		// 	// initial: 2,
		// 	// regular: 2,
		// 	restart: false
		// },
		setup: function ( wallaby ) {
			process.env.WALLABY = wallaby.localProjectDir
			process.env.DEBUG = '*'
			process.env.POD_NAMESPACE = 'kube-system'
			// process.env.POD_NAMESPACE = 'dev' // etc

			require( './globals' )
			require( './globals.test' )

			var tf = wallaby.testFramework
			tf.timeout( 5000 )
			require( 'quibble' ).ignoreCallsFromThisFile( require.main.filename )
		},
		teardown: function ( wallaby ) {
			require( 'testdouble' ).reset()
		}
	}
}