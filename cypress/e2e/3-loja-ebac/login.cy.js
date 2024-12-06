/// <references types ="cypress"/>

describe('Funcionalidade: Login', () =>{

    it('Deve fazer login com sucesso',() =>{
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('kelly.teste1@teste.com')
            cy.get('#password').type('@teste12345')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, kelly.teste1 (não é kelly.teste1? Sair)')
    })

})