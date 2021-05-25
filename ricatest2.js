/// <reference types="cypress" />

context('Platform compatibility', () => {
 beforeEach(() => {
    cy.visit('https://Billease.ph')
  })

//compatibility in macbook
  	it('Should run in mac 15', () => {
		cy.viewport('macbook-15')
		cy.screenshot()
		cy.wait(200)
  	})
//compatibility in ipad
 	it('Should run in ipad 2', () => {
		cy.viewport('ipad-2')
		cy.screenshot()
		cy.wait(200)
  	})

//compatibility in iphone
  	it('Should run in iphone 6', () => {
		cy.viewport('iphone-6')
		cy.screenshot()
		cy.wait(200)
  		})


 context('Title Page display', () => {
  beforeEach(() => {
    cy.visit('https://Billease.ph')
  })

   it('Should display "BillEase. Get your purchase on installments now. No credit card needed!" ', () => {
		cy.title().should("eq", "BillEase. Get your purchase on installments now. No credit card needed!")
		
     })


 context('Reloading page', () => {
  beforeEach(() => {
    cy.visit('https://Billease.ph')
  })

  	it('Should reload page smoothly', () => {
   	 cy.reload()
    	cy.reload(true)
  		})

  		})


  // 
   })
 
  })


