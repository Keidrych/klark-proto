var klark = require( 'klark-js' );
klark.run( {
	predicateFilePicker: function () {
		let files = [
			'app/**/index.js',
			'app/**/*.module.js',
			'plugins/**/index.js',
			'plugins/**/*.module.js'
		]
		if ( process.env.NODE === 'development' ) {
			files = files.concat( 'plugins/**/*-test.js' )
		}
		return files
	},
	globalRegistrationModuleName: 'ProtoModule',
	moduleAlias: {
		'_': '$lodash',
		'cron': '$node-schedule',
		'bus': '$hermes-bus'
	}
} );