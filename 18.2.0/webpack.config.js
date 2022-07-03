import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
  entry: path.join(__dirname, "src", "index.js"),
  // where the built bundles files go
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
        {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },  
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ]
}