describe("Display list of products", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it('when user visit the page', () => {
    cy.visit("http://localhost:3001")
    cy.get('[data-cy="header"]').should('contain', 'Products List')
  });

  it('user can see a list of 2 products', () => {
    cy.get('[data-cy="main-container"]').within(() => {
      cy.get('[data-cy="list"]').should('have.length', 2)
    })
  });
})

