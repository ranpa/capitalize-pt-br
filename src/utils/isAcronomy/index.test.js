import isAcronomy from './index'

describe('Basic use cases', () => {
  it('isAcronomy should be a function', () => {
    expect(typeof isAcronomy).toBe('function')
  })

  it('isAcronomy("") should return false', () => {
    const before = ''
    const after = false
    expect(isAcronomy(before)).toEqual(after)
  })

  it('isAcronomy("ranpa") should return false', () => {
    const before = 'ranpa'
    const after = false
    expect(isAcronomy(before)).toEqual(after)
  })

  it('isAcronomy("C.E") should return false', () => {
    const before = 'C.E'
    const after = false
    expect(isAcronomy(before)).toEqual(after)
  })

  it('isAcronomy("C.E.") should return true', () => {
    const before = 'C.E.'
    const after = true
    expect(isAcronomy(before)).toEqual(after)
  })

  it('isAcronomy("A.B.C.") should return true', () => {
    const before = 'A.B.C.'
    const after = true
    expect(isAcronomy(before)).toEqual(after)
  })

  it('isAcronomy(".C.E.") should return true', () => {
    const before = '.C.E.'
    const after = false
    expect(isAcronomy(before)).toEqual(after)
  })

  it('isAcronomy("CE..") should return false', () => {
    const before = 'CE..'
    const after = false
    expect(isAcronomy(before)).toEqual(after)
  })

  it('isAcronomy("C..E") should return false', () => {
    const before = 'C..E'
    const after = false
    expect(isAcronomy(before)).toEqual(after)
  })

  it('isAcronomy(".C.E") should return false', () => {
    const before = '.C.E'
    const after = false
    expect(isAcronomy(before)).toEqual(after)
  })
})
