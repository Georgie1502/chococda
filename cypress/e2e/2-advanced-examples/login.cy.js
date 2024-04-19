describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://127.0.0.1:8000/login')
        cy.get('#inputEmail').type("mathieu.mith4@laposte.net")
        cy.get('#inputPassword').type("Azertyuio1234")
        cy.get('.btn').click()
        cy.get('.alert').should('contain', "connecte")

      })
      it('passes', () => {
        cy.visit('https://127.0.0.1:8000/login')
        cy.get('#inputEmail').type("mathieu.mith4@laposte.net")
        cy.get('#inputPassword').type("Azertyuio134")
        cy.get('.btn').click()
        cy.get('.alert').should('contain', "Email ou mot de passe incorrect")
      })
})