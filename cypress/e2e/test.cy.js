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
 
})

describe('ArticleContainer', () => {
    it('Should exist', () => {
        cy.get('.ArticleContainer').should('exist')
    })

    it('Should contain a name', () => {
        cy.get('.ArticleContainer').within(() => {
            cy.get('p').should('exist')
            cy.get('p').invoke('text').should('eq', 'ArticleContainer')
       })
   })
})

describe('Article', () => {
    it('Should exist', () => {
        cy.get('.Article').should('exist')
    })

    it('Should contain a name', () => {
        cy.get('.Article').within(() => {
            cy.get('p').should('exist')
            cy.get('p').invoke('text').should('eq', 'Article')
       })
   })
})

