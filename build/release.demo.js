const ghpages = require('gh-pages')

ghpages.publish('dist', function (err) {
    if (!err) {
        console.log('发布成功')
    }
    else {
        console.log(err)
    }
})