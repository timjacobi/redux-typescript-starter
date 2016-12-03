module.exports = {
    entry: "./client/index.tsx",
    output: {
        filename: "./public/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled 
            // by 'ts-loader' first and then by 'babel-loader'
            //
            // Webpack uses the last loader in the chain first
            // i.e. babel-loader(ts-loader(source))
            { test: /\.tsx?$/, loaders: ["babel-loader", "ts-loader"] }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};