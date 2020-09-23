describe("Display list of products", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture:products.json"})
    cy.visit("/");
  });

  it('when user visit the page', () => {
    cy.get('[data-cy="header"]').should('contain', 'Products list')
  });

  it('user can see a list of 2 products', () => {
    cy.get('[data-cy="product-1"]').within(() => {
      cy.get('[data-cy="name"]').should('contain', 'Pizza')
    })
    cy.get('[data-cy="product-2"]').within(() => {
      cy.get('[data-cy="description"]').should("contain", "Vegeterian");
    });
    cy.get('[data-cy="product-3"]').within(() => {
      cy.get('[data-cy="price"]').should("contain", "100");
    });
  });
})

