var fs = require('fs')
var url = require('url')

module.exports = function(inputFile, outputFile) {
  fs.readFile(inputFile, {encoding: 'utf8'}, function(error, urlsList){
    var pathnameList = urlsList.split('\n').map(function(fullUrl){
      return url.parse(fullUrl).pathname
    })
    fs.writeFile(outputFile, pathnameList.join('\n'), function() {
      console.log('Transformation completed')
    })
  })
}
