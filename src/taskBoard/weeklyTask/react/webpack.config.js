const path = require('path');

module.exports = {
    entry: {
        taskInput: './taskInput/index.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, '../static/js')
    },
    module: {
        rules: [
            { test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.less$/, use: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, use: 'style-loader!css-loader' }
        ]
    }
};