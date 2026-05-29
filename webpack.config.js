var path = require( 'path' ),
	GasPlugin = require( 'gas-webpack-plugin' ),
	WrapperPlugin = require( 'wrapper-webpack-plugin' );

var babelOptions = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					ie: '11'
				}
			}
		]
	],
	plugins: [
		'@babel/plugin-transform-member-expression-literals',
		'@babel/plugin-transform-property-literals'
	]
};

module.exports = [
	{
		mode: 'none',
		target: [ 'web', 'es5' ],
		entry: './src/server/code.js',
		output: {
			library: {
				type: 'this'
			},
			filename: 'Code.js',
			path: path.resolve( __dirname, 'dist' ),
			environment: {
				arrowFunction: false,
				const: false,
				destructuring: false
			}
		},
		module: {
			rules: [ {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: babelOptions
			}]
		},
		plugins: [ new GasPlugin() ]
	},
	{
		mode: 'production',
		target: [ 'web', 'es5' ],
		entry: './src/client/index.jsx',
		output: {
			filename: 'javascript.html',
			path: path.resolve( __dirname, 'dist' ),
			environment: {
				arrowFunction: false,
				const: false,
				destructuring: false
			}
		},
		module: {
			rules: [ {
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: Object.assign( {}, babelOptions, {
					presets: babelOptions.presets.concat( [ '@babel/preset-react' ] )
				} )
			} ]
		},
		optimization: {
			minimize: true
		},
		plugins: [
			new WrapperPlugin( {
				header: '<script>',
				footer: '</script>',
				afterOptimizations: true
			} ),
		]
	}
]
