beforeEach(() => { 
  cy.intercept('GET', {fixture: 'articles.json'}).as('getArticles') 
  cy.visit('localhost:3000') 
}) 

describe('User Stories', () => {
  it('Confirm tests are working', () => {
      expect(true).to.equal(true)
  })
})

describe('App', () => {
    it('Should exist', () => {
        cy.get('.App').should('exist')
    })

    it('Should contain a name', () => {
        cy.get('.App').within(() => {
            cy.get('p').should('exist')
            cy.get('p').invoke('text').should('eq', 'App')
       })
   })
})

