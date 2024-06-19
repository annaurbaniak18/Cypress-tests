import "cypress-file-upload";
import "../fixtures/userData.json";

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/index.php?controller=authentication&back=my-account");
  cy.get("#email").type(email);
  cy.get("#passwd").type(password);
  cy.get("#SubmitLogin").click();
});
