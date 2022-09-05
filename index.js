try {
  module.exports = require('./native')
} catch {
  module.exports = require('./fallback')
}
