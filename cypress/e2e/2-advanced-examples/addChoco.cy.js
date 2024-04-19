describe('template spec', () => {
 



        it('passes', () => {
            cy.visit('https://127.0.0.1:8000/login')
            cy.get('#inputEmail').type("mathieu.mith4@laposte.net")
            cy.get('#inputPassword').type("Azertyuio1234")
            cy.get('.btn').click()
            cy.get('.alert').should('contain', "connecte")
            cy.wait(2000)
            cy.visit('https://127.0.0.1:8000/chocoblast/add')
            cy.get('#chocoblast_title').type("my super title")
            cy.get('#chocoblast_createAt').type("1999-12-31")
            cy.get('.ts-control')
          })
    
      

    //   cy.get('#register_firstname').type("Mathieu")
    //   cy.get('#register_lastname').type("Mithridate")
    //   cy.get('#register_email').type("mathieu.mith4@laposte.net")
    //   cy.get('#register_password').type("Azertyuio1234")
    //   cy.get('[type="submit"]').click()
    //   cy.wait(2000)
    //   cy.get('p.alert').should('contain', "Le compte a ete ajoute")

})