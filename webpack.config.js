module.exports = {
    entry: '/node_modules/animejs/lib/anime.es.js', // Your main entry file
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };