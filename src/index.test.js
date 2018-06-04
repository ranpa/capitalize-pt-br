'use strict'

import { expect } from 'chai'
import capitalize from './index'

describe('Basic use cases', () => {
  it('capitalize should be a function', () => {
    expect(capitalize).to.be.a('function')
  })

  it('capitalize("") should return ""', () => {
    expect(capitalize('')).to.be.equal('')
  })

  it('capitalize("SERVIDOR PÚBLICO MUNICIPAL") should return "Servidor Público Municipal"', () => {
    const before = 'SERVIDOR PÚBLICO MUNICIPAL'
    const after = 'Servidor Público Municipal'
    expect(capitalize(before)).to.be.equal(after)
  })

  it('capitalize("JOAO ALVES POVOAS FILHO") should return "Joao Alves Povoas Filho"', () => {
    const before = 'JOAO ALVES POVOAS FILHO'
    const after = 'Joao Alves Povoas Filho'
    expect(capitalize(before)).to.be.equal(after)
  })
})

describe('With prepositions', () => {
  it('capitalize("PETROLINA DE GOIÁS") should return "Petrolina de Goiás"', () => {
    const before = 'PETROLINA DE GOIÁS'
    const after = 'Petrolina de Goiás'
    expect(capitalize(before)).to.be.equal(after)
  })

  it('capitalize("JOAO ALVES DOS SANTOS FILHO") should return "Joao Alves dos Santos Filho"', () => {
    const before = 'JOAO ALVES DOS SANTOS FILHO'
    const after = 'Joao Alves dos Santos Filho'
    expect(capitalize(before)).to.be.equal(after)
  })

  it('capitalize("AIQUARA NO CAMINHO CERTO") should return "Aiquara no Caminho Certo"', () => {
    const before = 'AIQUARA NO CAMINHO CERTO'
    const after = 'Aiquara no Caminho Certo'
    expect(capitalize(before)).to.be.equal(after)
  })

  it('capitalize("DEFERIDO COM RECURSO") should return "Deferido com Recurso"', () => {
    const before = 'DEFERIDO COM RECURSO'
    const after = 'Deferido com Recurso'
    expect(capitalize(before)).to.be.equal(after)
  })

  it('capitalize("A TRANSFORMAÇÃO CONTINUA") should return "A Transformação Continua"', () => {
    const before = 'A TRANSFORMAÇÃO CONTINUA'
    const after = 'A Transformação Continua'
    expect(capitalize(before)).to.be.equal(after)
  })

  it('capitalize("ARACAJU EM BOAS MÃOS") should return "Aracaju em Boas Mãos"', () => {
    const before = 'ARACAJU EM BOAS MÃOS'
    const after = 'Aracaju em Boas Mãos'
    expect(capitalize(before)).to.be.equal(after)
  })
})

describe('With initials', () => {
  it('capitalize("ELEITO POR QP") should return "Eleito por QP"', () => {
    const before = 'ELEITO POR QP'
    const after = 'Eleito por QP'
    expect(capitalize(before)).to.be.equal(after)
  })

  it('capitalize("CNPJ DA EMPRESA X") should return "CNPJ da Empresa X"', () => {
    const before = 'CNPJ DA EMPRESA X'
    const after = 'CNPJ da Empresa X'
    expect(capitalize(before)).to.be.equal(after)
  })
})
