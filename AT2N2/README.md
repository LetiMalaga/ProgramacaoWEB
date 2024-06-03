# Direcionamento da Atividade AT2N2

Crie um projeto para representar um sistema de uma livraria, utilizando Node.js e Express. O sistema deve
servir para gerenciar o cadastro dos livros da loja, de forma que os endpoints da API sejam responsáveis
pelas seguintes operações:
- Listagem dos livros;
- Compra de um livro;
- Cadastro de novos livros.

Cada livro é representado pelos seguintes atributos:
- Nome;
- Autor;
- Gênero;
- Número de exemplares disponíveis para compra;
- Imagem da capa;

Os livros devem ser armazenados em um arquivo JSON, que será divulgado previamente pelo professor. As
operações que modificam o cadastro (compra e cadastro) devem ser refletidas no arquivo.

## Critérios de avaliação
O projeto vale no máximo 3 pontos na nota do bimestre (N2), divididos da seguinte forma:
- Implementação das funcionalidades: 2.1 (0.7 por funcionalidade);
  - Serão considerados o correto funcionamento e usabilidade das operações;
- Estruturação e organização do código: 0.4;
  - Divisão do projeto em arquivos;
  - Modularização do código JS;
  - Organização/clareza do código (nomes significativos de variáveis, indentação, etc.);
- Aplicação das operações sobre o arquivo: 0.4
  - Correta aplicação das operações no arquivo, sem corromper a estrutura do JSON.
- Organização do GitHub (README, comentários e tamanho dos commits, etc.) (0.1);

## Observações
O trabalho consiste da seguinte estrutura:
'''
livraria/
├── livros.json
├── package.json
├── servidor.js
└── rotas/
    └── livros.js
'''
