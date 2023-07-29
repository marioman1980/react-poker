const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
  mode: "development", 
  entry: "./src/scripts/index.js",
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.bundle.css'
    })
  ],  
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  target: "web",
  devServer: {
    port: "9500",
    static: ["./public"],
    open: true,
    hot: true ,
    liveReload: true
  },
  resolve: {
    extensions: ['.js','.jsx','.json'] 
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use:  'babel-loader' //loader which we are going to use
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      }            
    ]
  }
}