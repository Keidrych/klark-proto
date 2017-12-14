/* eslint-disable import/no-extraneous-dependencies */

let basePath
if ( process.env.NODE_ENV === 'development' ) {
	basePath = ( process.env.WALLABY ) ? process.env.WALLABY : process.cwd()
} else {
	basePath = '/'
}

global.npm = require( 'acquire' )( {
	basedir: basePath
} )
let aliases = {
	'_': 'lodash',
	'path': 'upath'
}
Object.keys( aliases ).forEach( ( alias ) => {
	npm[ alias ] = npm[ aliases[ alias ] ]
} )

global.getModuleName = ( fileName, dirName ) => {
	let path = npm.path
	let possibleName = path.basename( path.trimExt( fileName ) )
	if ( possibleName === 'index' || possibleName.includes( 'module' ) ) {
		return npm.path.basename( dirName )
	} else {
		return possibleName
	}
}

global.significantOther = ( filename ) => {
	let path = npm.path
	return path.basename( filename.replace( '.test', '' ) )
}