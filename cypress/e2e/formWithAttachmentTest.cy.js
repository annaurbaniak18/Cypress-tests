describe("Form With Attachment Test", () => {
  it("Should attach file to contact form and send a message", () => {
    cy.visit("/index.php?controller=contact");
    cy.get("#id_contact").select("Webmaster");
    cy.get("#email").type("test@test.pl");
    cy.get("#fileUpload").attachFile(
      "../fixtures/mobile-phone-g6f9a45c31_1920.jpg"
    );
    cy.get("span.filename").should(
      "contain",
      "mobile-phone-g6f9a45c31_1920.jpg"
    );
    cy.get("#message").type("test test");
    cy.get("#submitMessage > span").click();
    cy.contains("Your message has been successfully sent to our team.").should(
      "be.visible"
    );
  });
});
