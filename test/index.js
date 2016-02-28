var expect = require('chai').expect
var path = require('path')
var fs = require('fs')
var url = require('url')

describe('url-transformer.js', function () {
  it('must export function and create output/paths.txt', function(done){

    var urlTransformer = require(path.join(__dirname, '../url-transformer'))
    var inputFile = path.join(__dirname, '..', 'data', 'urls.txt')
    var outputFile = path.join(__dirname, '..', 'output', 'paths.txt')
    fs.unlinkSync(outputFile)
    urlTransformer(inputFile, outputFile, function(message) {
      expect(message).to.equal('Transformation completed')
      fs.readFile(inputFile, {encoding: 'utf8'}, function(error, urlsList){
        var pathnameListExpected = urlsList.split('\n').map(function(fullUrl){
          return url.parse(fullUrl).pathname
        })
        var outputFile = path.join(__dirname, '..','output', 'paths.txt')
        fs.readFile(outputFile, {encoding: 'utf8'}, function(error, pathnameList) {
          var pathnameListActual = pathnameList.split('\n')
          expect(pathnameListExpected.length).to.equal(pathnameListActual.length)
          var l = pathnameListExpected.length
          var n = Math.round(Math.random()*l)
          expect(pathnameListExpected[n]).to.equal(pathnameListActual[n])
          n = Math.round(Math.random()*l)
          expect(pathnameListExpected[n]).to.equal(pathnameListActual[n])
          n = Math.round(Math.random()*l)
          expect(pathnameListExpected[n]).to.equal(pathnameListActual[n])
          done()
        })
      })
    })
  })
})
