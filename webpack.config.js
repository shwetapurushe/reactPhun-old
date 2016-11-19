var path = require('path');
var webpack = require('webpack');

module.exports ={
	entry : './main.js',
	output : {
		path: __dirname + "/dist",
		filename:'bundle.js',
		library: 'reactradviz',
		libraryTarget : 'umd'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool : "source-map",
	module :{
		loaders :[{
			test : /\.jsx?$/,
			exclude : '/node_modules/',
			loader : 'babel-loader',
			query : {
				presets : ['es2015', 'react']
			}
		}]
	},
	externals : {
		"react" : "React",
		"react-dom": "ReactDOM",
		"Weave" : "Weave"
	}

};/**
 * Created by Shweta on 11/19/16.
 */
