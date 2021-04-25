

describe('test runner', ()=>{
    
    it('loads page',()=>{
        cy.visit('/')
    })
        
    
    

    it('checks the working of Fahrenheit radio button',()=>{

        cy.get('input[type="radio"]').should('have.length',2)
        cy.get('[data-testid=celcius-button] span').contains('Celcius').should('exist');
        cy.get('[data-testid=fahrenheit-button] span').contains('Fahrenheit').should('exist');

        cy.get('[data-testid=fahrenheit-button] :radio').should('be.checked')

        cy.get('[data-testid=temp_display_unit]').first().contains('℉').should('exist');
        cy.get('[data-testid=graph-temp-unit]').first().contains('℉').should('exist');
    })

    
    it('checks the working of Celcius radio button',()=>{

        cy.get('[data-testid=celcius-button] :radio').click()
        cy.get('[data-testid=celcius-button] :radio').should('be.checked')
        
        cy.get('[data-testid=temp_display_unit]').first().contains('℃').should('exist');
        cy.get('[data-testid=graph-temp-unit]').first().contains('℃').should('exist');

    })

        
    it('checks the working of next and previous arrow button',()=>{

        cy.get('[data-testid=next-button]').should('exist')
        cy.get('[data-testid=card]').first().should('have.css','border','2px solid rgb(0, 0, 0)')
        
        cy.get('[data-testid=next-button]').click()
        cy.get('[data-testid=card]').eq(0).should('not.have.css','border','2px solid rgb(0, 0, 0)')
        cy.get('[data-testid=card]').eq(1).should('have.css','border','2px solid rgb(0, 0, 0)')

        cy.get('[data-testid=prev-button]').click()
        cy.get('[data-testid=card]').eq(0).should('have.css','border','2px solid rgb(0, 0, 0)')
        cy.get('[data-testid=card]').eq(1).should('not.have.css','border','2px solid rgb(0, 0, 0)')
        cy.get('[data-testid=prev-button]').should('not.exist')

    })

    // Did not cover everything but the basics one :)


})