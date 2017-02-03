var webpack = require("webpack");
var path = require("path");

// drectory in which all transpiled and bundled files will be copied and served to the browser
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// which file to start the transpiling journey in
var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, // Match both .js and .jsx files
				include: SRC_DIR,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;