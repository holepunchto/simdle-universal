const b4a = require('b4a')
const scalar = require('./scalar')

exports.cnt = function cnt (buf, result = b4a.allocUnsafe(buf.byteLength)) {
  if (buf.byteLength % 16 !== 0) throw new Error('Buffer length must be a multiple of 16')
  if (buf.byteLength > result.byteLength) throw new Error('Length of result buffer is insufficient')

  for (let i = 0; i < buf.length; i++) {
    result[i] = scalar.cnt(buf[i])
  }

  return result
}
