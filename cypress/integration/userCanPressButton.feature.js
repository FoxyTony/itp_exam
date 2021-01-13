describe('User can press button', () => {
	it('user can press button', () => {
        cy.visit('http://localhost:3001')
        cy.contains('Greetings')
        cy.get('#quote').click()
	})
})