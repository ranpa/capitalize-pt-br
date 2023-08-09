'use strict'

import capitalize from './index'

describe('Basic use cases', () => {
  it('capitalize should be a function', () => {
    expect(typeof(capitalize)).toBe('function')
  })

  it('capitalize(null) should return null', () => {
    expect(capitalize(null)).toBeNull()
  })

  it('capitalize(undefined) should return undefined', () => {
    expect(capitalize(undefined)).toBeUndefined()
  })

  it('capitalize(123) should return 123', () => {
    expect(capitalize(123)).toEqual(123)
  })

  it('capitalize("") should return ""', () => {
    expect(capitalize('')).toEqual('')
  })

  it('capitalize("SERVIDOR PÚBLICO MUNICIPAL") should return "Servidor Público Municipal"', () => {
    const before = 'SERVIDOR PÚBLICO MUNICIPAL'
    const after = 'Servidor Público Municipal'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("JOAO ALVES POVOAS FILHO") should return "Joao Alves Povoas Filho"', () => {
    const before = 'JOAO ALVES POVOAS FILHO'
    const after = 'Joao Alves Povoas Filho'
    expect(capitalize(before)).toEqual(after)
  })
})

describe('With prepositions', () => {
  it('capitalize("PETROLINA DE GOIÁS") should return "Petrolina de Goiás"', () => {
    const before = 'PETROLINA DE GOIÁS'
    const after = 'Petrolina de Goiás'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("JOAO ALVES DOS SANTOS FILHO") should return "Joao Alves dos Santos Filho"', () => {
    const before = 'JOAO ALVES DOS SANTOS FILHO'
    const after = 'Joao Alves dos Santos Filho'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("AIQUARA NO CAMINHO CERTO") should return "Aiquara no Caminho Certo"', () => {
    const before = 'AIQUARA NO CAMINHO CERTO'
    const after = 'Aiquara no Caminho Certo'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("DEFERIDO COM RECURSO") should return "Deferido com Recurso"', () => {
    const before = 'DEFERIDO COM RECURSO'
    const after = 'Deferido com Recurso'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("A TRANSFORMAÇÃO CONTINUA") should return "A Transformação Continua"', () => {
    const before = 'A TRANSFORMAÇÃO CONTINUA'
    const after = 'A Transformação Continua'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("ARACAJU EM BOAS MÃOS") should return "Aracaju em Boas Mãos"', () => {
    const before = 'ARACAJU EM BOAS MÃOS'
    const after = 'Aracaju em Boas Mãos'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("D. PEDRO I") should return "D. Pedro I"', () => {
    const before = 'D. PEDRO I'
    const after = 'D. Pedro I'
    expect(capitalize(before)).toEqual(after)
  })
})

describe('With initials', () => {
  it('capitalize("ELEITO POR QP") should return "Eleito por QP"', () => {
    const before = 'ELEITO POR QP'
    const after = 'Eleito por QP'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("CNPJ DA EMPRESA X") should return "CNPJ da Empresa X"', () => {
    const before = 'CNPJ DA EMPRESA X'
    const after = 'CNPJ da Empresa X'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("EMPRESA LTDA ME") should return "Empresa LTDA ME"', () => {
    const before = 'EMPRESA LTDA ME'
    const after = 'Empresa LTDA ME'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("SANTANDER SA") should return "Santander SA"', () => {
    const before = 'SANTANDER SA'
    const after = 'Santander SA'
    expect(capitalize(before)).toEqual(after)
  })
})

describe('With Acronyms', () => {
  it('capitalize("O BNDES FOI RESPONSÁVEL") should return "O BNDES Foi Responsável"', () => {
    const before = 'O BNDES FOI RESPONSÁVEL'
    const after = 'O BNDES Foi Responsável'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("ELA NASCEU EM SE") should return "Ela Nasceu em SE"', () => {
    const before = 'ELA NASCEU EM SE'
    const after = 'Ela Nasceu em SE'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("A UFS FOI ELEITA") should return "A UFS Foi Eleita"', () => {
    const before = 'A UFS FOI ELEITA'
    const after = 'A UFS Foi Eleita'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("C.E. PRES COSTA E SILVA") should return "C.E. Pres Costa e Silva"', () => {
    const before = 'C.E. PRES COSTA E SILVA'
    const after = 'C.E. Pres Costa e Silva'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("O .C.E. PRES COSTA E SILVA") should return "O .c.e. Pres Costa e Silva"', () => {
    const before = 'O .C.E. PRES COSTA E SILVA'
    const after = 'O .c.e. Pres Costa e Silva'
    expect(capitalize(before)).toEqual(after)
  })

  it('capitalize("C..E PRES COSTA E SILVA") should return "C..e Pres Costa e Silva"', () => {
    const before = 'C..E PRES COSTA E SILVA'
    const after = 'C..e Pres Costa e Silva'
    expect(capitalize(before)).toEqual(after)
  })
})
