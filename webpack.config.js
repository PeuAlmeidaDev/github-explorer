const path = require("path"); // importa o path, que é um módulo do Node.js que padroniza a forma de manipulação de caminhos de arquivos
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production", // modo de desenvolvimento
  devtool: isDevelopment ? "eval-source-map" : "source-map", // mapa de origem
  entry: path.resolve(__dirname, "src", "index.jsx"), // caminho do arquivo de entrada
  output: {
    path: path.resolve(__dirname, "dist"), // caminho do arquivo de saída
    filename: "bundle.js", // nome do arquivo de saída
  },
  resolve: {
    extensions: [".js", ".jsx"], // extensões dos arquivos que o webpack vai ler
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 5500,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(), // se estiver em desenvolvimento, usa o plugin de refresh
    new HtmlWebpackPlugin({ // cria o arquivo index.html
      template: path.resolve(__dirname, "public", "index.html"), // caminho do arquivo template
    }),
  ].filter(Boolean), // filtra os plugins que não são undefined
  module: { // configuração do webpack
    rules: [  // regra para o webpack
      {
        test: /\.jsx?$/, // testa se o arquivo termina com .jsx
        exclude: /node_modules/, // exclui o node_modules
        use: {
          loader: "babel-loader", // usa o babel-loader
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ], 
  },
};
