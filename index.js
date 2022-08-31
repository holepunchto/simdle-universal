try {
  module.exports = require('simd-native')
} catch {
  module.exports = require('./browser')
}
