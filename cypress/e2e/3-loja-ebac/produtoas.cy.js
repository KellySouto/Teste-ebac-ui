/// <references types ="cypress"/>
describe('Funcionalidade Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        
    });
    
   it('Deve selcionar um  um produto da lista', () => {
      cy.get('.product-block')
      //.first()
      //.last()
      // .eq(2)
      .contains('Aether Gym Pant')
       .click()
       cy.get('#tab-title-description > a').should('contain', 'Descrição')
    
   });

   it('Deve selcionar o primeiro item da lista', () => {
    cy.get('.product-block')
      .first()
      .click()
      cy.get('#tab-title-description > a').should('contain', 'Descrição')
    
   });

   it('Deve selcionar o ultimo item da lista', () => {
    cy.get('.product-block')
      .last()
      .click()
      cy.get('#tab-title-description > a').should('contain', 'Descrição')
    
   });
   it('Deve selcionar o item da posição 3 da lista', () => {
    cy.get('.product-block')
      .eq(2)
      .click()
      cy.get('#tab-title-description > a').should('contain', 'Descrição')
    
   });
});