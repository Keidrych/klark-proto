var klark = require( 'klark-js' );
klark.run( {
	predicateFilePicker: function () {
		return [
			'app/**/index.js',
			'app/**/*.module.js',
			'plugins/**/index.js',
			'plugins/**/*.module.js'
		];
	},
	globalRegistrationModuleName: 'ProtoModule',
	moduleAlias: {
		'_': '$lodash',
		'cron': '$node-schedule',
		'bus': '$hermes-bus'
	}
} );