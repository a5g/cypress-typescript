
const config = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'awesome-typescript-loader',
        }],
      },
    ],
  },
}

module.exports = config