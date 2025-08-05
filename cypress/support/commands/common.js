Cypress.Commands.add('verificarMensagemNoToast', mensagem =>{
    cy.get('.toast').should('have.text',mensagem) //Verifico se o o testo eh o esperado do erro
})

Cypress.Commands.add('selecionarOpcaoNaCombobox', (labelDocampo, opcao) =>{
    cy.get(`label[for="${labelDocampo}"]`).parent().as(`campo-${labelDocampo}`)
    cy.get(`@campo-${labelDocampo}`).click() //cliquei no elemento pai
    cy.get(`@campo-${labelDocampo}`).contains(`${opcao}`).click()
})