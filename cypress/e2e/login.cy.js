describe('Login', () => {
  it('Login com dados validos deve permitir a entrada no sistema', () => {
    //Arrange
    cy.visit('http://localhost:4000')
    
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    //cy.get('#login-section > .btn').click() //melhorando na linha de baico
    cy.contains('button','Entrar').click()

    //Assert
    cy.contains('h4','Realizar Transferência').should('be.visible') //Verifico se o elemento esta visivel
  })

  /*    colocanco it.only soh roda o teste com essa marcacao only
  it.only('Login com dados invalidos deve apresentar mensagem de erro', () => { 
  */

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    //Arrange
    cy.visit('http://localhost:4000')
    
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    //cy.get('#login-section > .btn').click() //melhorando na linha de baico
    cy.contains('button','Entrar').click()
    //Assert
    cy.get('.toast').should('have.text','Erro no login. Tente novamente.') //Verifico se o o testo eh o esperado do erro
  })

})