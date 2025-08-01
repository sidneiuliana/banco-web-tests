describe('Login', () => {
  beforeEach(() =>{
    //Arrange
    cy.visit(Cypress.env('URL'))
    cy.screenshot('apos-visitar-pagina')
  })
 
  it('Login com dados validos deve permitir a entrada no sistema', () => {
    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.screenshot('apos-preencher-dados-validos')
    //cy.get('#login-section > .btn').click() //melhorando na linha de baico
    cy.contains('button','Entrar').click()
    cy.screenshot('apos-clicar-no-botao-entrar')
    //Assert
    cy.contains('h4','Realizar Transferência').should('be.visible') //Verifico se o elemento esta visivel
  })

  /*    colocanco it.only soh roda o teste com essa marcacao only
  it.only('Login com dados invalidos deve apresentar mensagem de erro', () => { 
  */

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {
      //Act
      cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })

    //cy.get('#login-section > .btn').click() //melhorando na linha de baico
    cy.contains('button','Entrar').click()
    //Assert
    cy.get('.toast').should('have.text','Erro no login. Tente novamente.') //Verifico se o o testo eh o esperado do erro
  })

})