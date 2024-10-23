describe('Input Value and Search Result Test', () => {
	it('"Should display correct results based on input value"', () => {
		cy.visit('/')
		cy.get('#searchinput').type('Poland')
		cy.get('button').contains('Search').click()
		cy.url().should('include', '/countries/poland')
		cy.get('h1').should('contain', 'Poland')
	})
	it('Should reset input value when Search button is clicked', () => {
		cy.visit('/')
		cy.get('#searchinput').type('Poland')
		cy.get('button').contains('Search').click()
		cy.url().should('include', '/countries/poland')
		cy.get('h1').should('contain', 'Poland')
		cy.get('h1').contains('Where in the world?').click()
		cy.get('#searchinput').should('have.value', '')
	})
})
