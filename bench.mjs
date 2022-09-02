import test from 'brittle'

test('cnt', async (t) => {
  const ops = 1000000

  const buf = new Uint32Array(2048).fill(0xffffffff)
  const expected = new Uint32Array(2048).fill(32)

  await t.test('simd', async (t) => {
    const { cnt } = await import('./index.js')

    const result = new Uint32Array(2048)

    const elapsed = await t.execution(() => {
      for (let i = 0; i < ops; i++) {
        cnt(buf, result)
      }
    })

    t.alike(result, expected)

    t.comment(Math.round(ops / elapsed * 1e3) + ' ops/s')
  })

  await t.test('non-simd', async (t) => {
    const { cnt } = await import('./browser.js')

    const result = new Uint32Array(2048)

    const elapsed = await t.execution(() => {
      for (let i = 0; i < ops; i++) {
        cnt(buf, result)
      }
    })

    t.alike(result, expected)

    t.comment(Math.round(ops / elapsed * 1e3) + ' ops/s')
  })
})
