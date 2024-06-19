describe("Login Test", () => {
  it("should log in using fixture data", () => {
    cy.fixture("userData.json").then((userData) => {
      cy.login(userData.email, userData.password);
    });
    cy.contains("Anna Urbaniak").should("be.visible");
  });
});
