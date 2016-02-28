var path = require('path')
var urlTransformer = require('./url-transformer')
var inputFile = path.join('data', 'urls.txt')
var outputFile = path.join('output', 'paths.txt')
urlTransformer(inputFile, outputFile, function(message) {
  console.log(message)
})