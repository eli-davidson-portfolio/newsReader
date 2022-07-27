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

const validName = 'Name Lastnamington III'
const validDate = '2022-01-21' 
const validTime = '23:00:00' 
const validNumber = '24' 

beforeEach(() => { 
  //cy.intercept('GET', '/reservations', {fixture: 'reservations.json'}).as('getReservations') 
  //cy.intercept('POST', '/reservations', {fixture: 'reservations.json'}).as('postReservation') 
  //cy.intercept('DELETE', '/reservations', {fixture: 'reservations.json'}).as('deleteReservation') 
  //cy.visit('localhost:3000') 
}) 

describe('User Stories', () => {
  it('Confirm tests are working', () => {
      expect(true).to.equal(true)
  })
})

describe('ArticleContainer', () => {
    it.skip('Should exist', () => {
        cy.get('.ArticleContainer').should('exist')
    })

    it.skip('Should contain a name', () => {
        cy.get('.ArticleContainer').within(() => {
            cy.get('p').should('exist')
            cy.get('p').invoke('text').should('eq', 'ArticleContainer')
       })
   })
})

