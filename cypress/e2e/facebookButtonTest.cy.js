describe("Facebook button test", () => {
  it("should open the Facebook page", () => {
    cy.visit("/index.php?controller=contact");

    cy.get(".facebook").scrollIntoView().trigger("focus");

    cy.get(".facebook a._blank")
      .invoke("removeAttr", "target")
      .click({ timeout: 8000 });

    cy.origin("https://www.facebook.com", () => {
      cy.url().should("include", "//www.facebook.com/prestashop");
    });
  });
});
