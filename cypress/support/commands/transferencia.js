Cypress.Commands.add('realizarTransferencia', (contaOrigem,contaDestino,Valor) =>{
    cy.selecionarOpcaoNaCombobox('conta-origem',contaOrigem)
    cy.selecionarOpcaoNaCombobox('conta-destino',contaDestino)	
    cy.get('#valor').click().type(Valor)
    cy.contains('button','Transferir').click()
})