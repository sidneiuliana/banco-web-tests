describe('Login', () => {
  beforeEach(() =>{
    //Arrange
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')
  })
 
  it('Login com dados validos deve permitir a entrada no sistema', () => {
    //Act
    cy.fazerLoginComCredenciaisValidas()

    cy.screenshot('apos-clicar-no-botao-entrar')
    //Assert
    cy.contains('h4','Realizar Transferência').should('be.visible') //Verifico se o elemento esta visivel
  })

  /*    colocanco it.only soh roda o teste com essa marcacao only
  it.only('Login com dados invalidos deve apresentar mensagem de erro', () => { 
  */

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    //Act
    cy.fazerLoginComCredenciaisInvalidas()
    
    //Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })

})