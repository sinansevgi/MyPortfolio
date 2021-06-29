const path = require('path');
 
module.exports = {
  "output": {
    "filename": "[name].pack.js",
    path: path.resolve(__dirname, 'js')
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  },
  "entry": {
    "main": "./js/main"
  }
};
