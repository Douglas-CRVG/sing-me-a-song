export function switchingPages() {
  cy.visit("http://localhost:3000/random");

  cy.intercept("GET", "http://localhost:5000/recommendations").as("switching");
  cy.contains("Home").click();
  cy.wait("@switching");
  cy.get("#name");
}
