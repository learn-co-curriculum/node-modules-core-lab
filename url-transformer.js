var fs = require('fs')
var path = require('path')
var url = require('url')

var inputFile = path.join('data', 'urls.txt')
fs.readFile(inputFile, {encoding: 'utf8'}, function(error, urlsList){
  var pathnameList = urlsList.split('\n').map(function(fullUrl){
    return url.parse(fullUrl).pathname
  })
  var outputFile = path.join('output', 'paths.txt')
  fs.writeFile(outputFile, pathnameList.join('\n'), function() {
    console.log('Transformation completed')
  })
})
