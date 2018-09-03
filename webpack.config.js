const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'application': './src/app.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			}
		]
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	resolveLoader: {
		modules: [ path.resolve(__dirname, 'node_modules') ]
	},
	plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: false
        })
	],
	externals: [
	],
};
