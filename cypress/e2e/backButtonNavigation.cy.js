describe('Back button navigation', () => {
	it('Should navigate back to the previous page when Back button is clicked ', () => {
		cy.openHomePage()
		cy.get('ul').find('li').eq(0).click()
		cy.url().should('include', '/Europe')
		cy.get('li').contains('Warsaw').click()
		cy.url().should('include', '/Europe/Poland')
		cy.get('button').contains('Back').should('be.visible')
		cy.get('button').contains('Back').click()
		cy.url().should('include', '/Europe')
		cy.get('button').contains('Back').should('be.visible')
		cy.get('button').contains('Back').click()
	})
})
