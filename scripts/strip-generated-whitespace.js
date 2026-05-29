const fs = require( 'fs' );

for ( const file of [ 'dist/Code.js', 'dist/javascript.html' ] ) {
	const contents = fs.readFileSync( file, 'utf8' );
	fs.writeFileSync( file, contents.replace( /[ \t]+$/gm, '' ) );
}
