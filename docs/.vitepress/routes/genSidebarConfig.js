const path = require('path')
const fs = require('fs')
module.exports = function genSidebarConfig(dir) {
  let p = path.join(__dirname, '../../', dir)

  let files = fs.readdirSync(p)

  var links = []
  files.forEach(item => {
    let name = path.basename(item, '.md')
    links.push({ text: name, link:  '/' + dir + '/' + name })
  })

  console.log(222, links)

  return links
}