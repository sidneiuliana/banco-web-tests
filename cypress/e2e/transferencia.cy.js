describe('Trasnferencias', () => {
  beforeEach(() =>{
    //Arrange
    cy.visit('/')  
    cy.fazerLoginComCredenciaisValidas()   
  })

   it('Deve transferir quando informo dados e valor validos', () => {
    //Act
    cy.realizarTransferencia('Maria','João','11')

    //Assert
    cy.verificarMensagemNoToast('Transferência realizada!')

   })

it('Deve apresentar erro quando tentar transferir mais que 5000 sem o token', () => {
    //Act
    cy.realizarTransferencia('Maria','João','6000')

    //Assert
    cy.verificarMensagemNoToast('Saldo insuficiente para realizar a transferência.') //A mensagem esta erradda

   })


})