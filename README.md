# Testes Automatizados - SauceDemo

## Projeto desenvolvido por  
Geovana Vitória Jacqueminouth Medeiros

---

## Descrição

Este projeto contém testes automatizados utilizando Cypress para validar os fluxos de login e funcionalidade de adicionar itens ao carrinho no site [SauceDemo](https://www.saucedemo.com/).

---

## Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — Framework para testes end-to-end  
- JavaScript

---

## Estrutura do projeto

- `cypress/support/commands.js` — comandos customizados (ex: login)  
- `cypress/e2e/login_e_carrinho.cy.js` — testes automatizados  
- `cypress.config.js` — configurações do Cypress, incluindo `baseUrl`

---

## Como executar os testes

1. Clone o repositório:
   ```bash
     git clone https://github.com/geovanavit/geovana_avaliacao.git
2. Acesse a pasta do projeto:
   ```bash
   cd geovana_avaliacao
3. Instale as dependências:
   ```bash
   npm install
4. Abra o Cypress com interface gráfica:
   ```bash
   npx cypress open
