describe('Country Finder - page load', () => {
    it('Should load the homepage successfully', () => {
        cy.visit('/');
        cy.get('ul').should('be.visible');
        cy.get('#searchinput').should('be.visible');
        cy.get('button').should('contain','Search')
    });
});
