var expect = require('chai').expect
var path = require('path')

var test = require('tape'),
  cp = require('child_process')

test('node version', function (t) {
  t.plan(6)
  child = cp.exec('node url-transformer',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout, 'Transformation completed')

    var fs = require('fs')
    var path = require('path')
    var url = require('url')

    var inputFile = path.join(__dirname, '..', 'data', 'urls.txt')
    fs.readFile(inputFile, {encoding: 'utf8'}, function(error, urlsList){
      var pathnameListExpected = urlsList.split('\n').map(function(fullUrl){
        return url.parse(fullUrl).pathname
      })
      var outputFile = path.join(__dirname, '..','output', 'paths.txt')
      fs.readFile(outputFile, {encoding: 'utf8'}, function(error, pathnameList) {
        var pathnameListActual = pathnameList.split('\n')
        t.equal(pathnameListExpected.length, pathnameListActual.length)
        var l = pathnameListExpected.length
        var n = Math.round(Math.random()*l)
        t.equal(pathnameListExpected[n], pathnameListActual[n])
        n = Math.round(Math.random()*l)
        t.equal(pathnameListExpected[n], pathnameListActual[n])
        n = Math.round(Math.random()*l)
        t.equal(pathnameListExpected[n], pathnameListActual[n])
      })
    })
  })
})
