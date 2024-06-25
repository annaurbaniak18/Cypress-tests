describe("Facebook button test", () => {
  it("should open the Facebook page", () => {
    cy.visit("/index.php?controller=contact");

    cy.get(".facebook").scrollIntoView().trigger("focus");

    cy.get(".facebook a._blank").invoke("removeAttr", "target").click();

    cy.origin("https://www.facebook.com", () => {
      cy.wait(5000);
      cy.url().should("include", "https://www.facebook.com/prestashop");
    });
  });
});
