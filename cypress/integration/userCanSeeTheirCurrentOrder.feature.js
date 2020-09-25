describe('User can see their current order', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture:products_index.json",
    });

    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:successfull_login.json",
      headers: {
        uid: "user@mail.com",
      },
    });

    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/orders",
      response: "fixture:successfull_order_create.json",
      headers: {
        uid: "user@mail.com",
      }
    })

    cy.route({
      method: "PUT",
      url: "http://localhost:3000/api/v1/orders/11",
      response: "fixture:successfull_order_update.json",
      headers: {
        uid: "user@mail.com",
      }
    })

    cy.visit("/");

    cy.get("[data-cy=toggle-login]").click();
    cy.get("[data-cy=login-form]").within(() => {
      cy.get("[data-cy=login-email]").type("user@mail.com");
      cy.get("[data-cy=login-password]").type("password");
      cy.get("[data-cy=login-submit]").contains("Submit").click();
    });
  })

  it('successfully', () => {
    cy.get("button").contains("View Order").should("not.exist")

    cy.get("[data-cy=product-1]").within(() => {
      cy.get('button').contains("Add to order").click()
    });

    cy.get("button").contains("View Order").click()

    cy.get("[data-cy=order-details]").within(() => {
      cy.get("[data-cy=order-total]").should("contain", "Total: 55")
      cy.get("li").contains("1x Pizza")
    })

    cy.get("[data-cy=product-2]").within(() => {
      cy.get('button').contains("Add to order").click()
    });

    cy.get("[data-cy=order-details]").within(() => {
      cy.get("[data-cy=order-total]").should("contain", "Total: 125")
      cy.get("li").contains("1x Cheeseburger")
    })

    cy.route({
      method: "PUT",
      url: "http://localhost:3000/api/v1/orders/11",
      response: "fixture:successfull_order_second_update.json",
      headers: {
        uid: "user@mail.com",
      }
    })

    cy.get("[data-cy=product-3]").within(() => {
      cy.get('button').contains("Add to order").click()
    });

    cy.get("[data-cy=order-details]").within(() => {
      cy.get("[data-cy=order-total]").should("contain", "Total: 195")
      cy.get("li").contains("2x Cheeseburger")
    })

  });
})
