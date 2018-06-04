# Capitalize PT-BR

Biblioteca para transformar a primeira letra de cada palavra em maiúscula. Preposições normalmente não serão tranformadas, a não ser que estejam no início da frase. Todas as letreas de siglas devem ser transformadas em maiúscula.

## Exemplos

| Original | Transformado |
|---------:|:-------------|
| SERVIDOR PÚBLICO MUNICIPAL | Servidor Público Municipal |
| JOAO ALVES POVOAS FILHO | Joao Alves Povoas Filho |
| PETROLINA DE GOIÁS | Petrolina de Goiás |
| JOAO ALVES DOS SANTOS FILHO | Joao Alves dos Santos Filho |
| AIQUARA NO CAMINHO CERTO | Aiquara no Caminho Certo |
| DEFERIDO COM RECURSO | Deferido com Recurso |
| A TRANSFORMAÇÃO CONTINUA | A Transformação Continua |
| ARACAJU EM BOAS MÃOS | Aracaju em Boas Mãos |
| ELEITO POR QP | Eleito por QP |
| CNPJ DA EMPRESA X | CNPJ da Empresa X |

## Utilização

Instale o pacote via npm

`$ npm install --save capitalize-pt-br`

Utilize a biblioteca na página desejada

### Padrão

```
const capitalize = require('capitalize-pt-br')
capitalize('HELLO WORLD')
// > Hello World
```

### Indicando lista de palavras que devem ser minúsculas

```
capitalize('HELLO WORLD', ['word'])
// > Hello word
```

### Indicando lista de palavras que devem ser maiúsculas

```
capitalize('HELLO WORLD', ['world'], ['hello'])
// > HELLO word
```
