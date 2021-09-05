const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/food-app/main.ts',
    output: {
        filename: 'bundle.js', //[contenthash]が使える
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'] //左から順番に推測してくれる
    },
    devServer: {
        static: {
            directory: __dirname,
        },
    }
}