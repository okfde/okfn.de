// Used to prebuild the site search index
// _after_ hugo has build the entire page.
// To be used with one of the CI scripts

var lunr = require('lunr'),
    stdin = process.stdin,
    stdout = process.stdout,
    buffer = []

stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (data) {
  buffer.push(data)
})

stdin.on('end', function () {
  var documents = JSON.parse(buffer.join(''))

  var idx = lunr(function () {
    this.field('id')
    this.field('url')
    this.field('title', { boost: 50 })
    this.field('tags', { boost: 30})
    this.field('content', { boost: 10 })

    documents.forEach(function (obj, index) {
      obj.id = index;
      this.add(obj);
    }, this);
  })

  stdout.write(JSON.stringify(idx))
})
