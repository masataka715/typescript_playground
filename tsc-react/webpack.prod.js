const path = require('path')
const {CleanWebpackPlugin } = require('clean-webpack-plugin') //一旦全てのjsを消してくれる


module.exports = {
    mode: 'production',
    entry: './src/food-app/main.ts',
    output: {
        filename: 'bundle.js', //[contenthash]が使える
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'] //左から順番に推測してくれる
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}