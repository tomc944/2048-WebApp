module.exports = {
  context: __dirname,
  entry: './js/application.js',
  output: {
    path: './js',
    publicPath: '/js/',
    filename: 'bundle.js'
  }
};
