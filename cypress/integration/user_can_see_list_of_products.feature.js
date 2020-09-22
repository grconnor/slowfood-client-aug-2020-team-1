describe("User can see list of products", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
    cy.get("#menu-tab").click();
  });
  it("displays first product", () => {
    cy.get("#product-1").within(() => {
      cy.get("").should("exist");
      cy.get(".ui.header").should("contain", "Pizza");
      cy.get(".description").should(
        "contain",
        "Pizza"
      );
    });
  });
  it("displays second product", () => {
    cy.get("#product-2").within(() => {
      cy.get("").should("exist");
      cy.get(".ui.header").should("contain", "Korv");
      cy.get(".description").should("contain", "Korv");
    });
  });
})