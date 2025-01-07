/// <references types ="cypress"/>
const perfil= require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () =>{
    beforeEach(() => {
        
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()

    });

    it('Deve fazer login com sucesso',() =>{
            cy.get('#username').type('kelly.teste1@teste.com')
            cy.get('#password').type('@teste12345')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, kelly.teste1 (não é kelly.teste1? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuraio invalido', () => {
        cy.get('#username').type('kteste1@teste.com')
        cy.get('#password').type('@teste12345')
        cy.get('.woocommerce-form > .button').click()
      //  cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalido', () => {
        cy.get('#username').type('kelly.teste1@teste.com')
        cy.get('#password').type('#teste12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail kelly.teste1@teste.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')

    });
    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, kelly.teste1 (não é kelly.teste1? Sair)')
    });

it.only('Deve fazer login com sucesso - usando fixture', () => {
    cy.fixture('perfil').then(dados =>{
        cy.get('#username').type(dados.usuario , {log: false})
        cy.get('#password').type(dados.senha , {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, kelly.teste1 (não é kelly.teste1? Sair)')
    })

});
  
})
