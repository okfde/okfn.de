// Used to prebuild the site search index
// _after_ hugo has build the entire page.
// To be used with one of the CI scripts

var lunr = require('lunr'),
    stdin = process.stdin,
    stdout = process.stdout,
    buffer = [],
    documents = {}

stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (data) {
  buffer.push(data)
})

stdin.on('end', function () {
  documents = JSON.parse(buffer.join(''))

  var idx = lunr(function () {
    this.field('id')
    this.field('url', { boost: 20})
    this.field('section', { boost: 30})
    this.field('title', { boost: 50 })
    this.field('content', { boost: 10 })

    documents.forEach(function (doc, index) {
      doc.id = index;
      this.add(doc);
    }, this)
  })

  stdout.write(JSON.stringify({idx: idx, store: documents}))
})
