# Projeto de Testes Automatizados - Cypress & JavaScript

## Objetivo

Este projeto foi desenvolvido para demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript. O foco está em boas práticas de organização, uso de Custom Commands e geração de relatórios de execução.

## Componentes do Projeto

- **Cypress**: Framework principal para automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes.
- **cypress-mochawesome-reporter**: Gera relatórios detalhados das execuções dos testes.
- **Testes E2E**: Scripts de teste para validar funcionalidades essenciais do sistema de banco web.

## Pré-requisitos

- Node.js instalado
- API [banco-api](https://github.com/juliodelimas/banco-api) em execução
- Aplicação Web [banco-web](https://github.com/juliodelimas/banco-web) em execução

## Instalação

1. Clone este repositório: git clone <url-do-repositorio> cd banco-web-tests
2. Instale as dependências: npm install

## Execução dos Testes
1. Certifique-se de que a API e a aplicação web estejam rodando localmente.
2. Execute os testes com o Cypress: npx cypress open ou para execução em modo headless com geração de relatório: npx cypress run --reporter cypress-mochawesome-reporter

## Estrutura dos Testes
- Os testes estão localizados em `cypress/e2e/`.
- Exemplos de cenários:
  - Login com dados válidos
  - Login com dados inválidos e verificação de mensagem de erro

### Exemplo de Teste

```javascript
it('Login com dados invalidos deve apresentar mensagem de erro', () => {
  cy.fazerLoginComCredenciaisInvalidas()
  cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
})

Custom Commands
Os comandos personalizados estão definidos em cypress/support/commands.js. Exemplos:

cy.fazerLoginComCredenciaisValidas(): Realiza login com dados válidos.
cy.fazerLoginComCredenciaisInvalidas(): Realiza login com dados inválidos.
cy.verificarMensagemNoToast(mensagem): Verifica se uma mensagem específica aparece no toast.
Relatórios
Após a execução dos testes, os relatórios são gerados automaticamente na pasta cypress/reports utilizando o cypress-mochawesome-reporter.

 
   
