describe('Continents validations', () => { 
    it('Should display the correct list of continents', () => {
        cy.openHomePage()
        cy.get('ul').find('li').then(continents=>{
            expect(continents).have.length(7)
        })
    });
 })