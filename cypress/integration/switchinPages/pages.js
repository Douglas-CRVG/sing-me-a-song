export function switchingPages() {
  const time = 3000;
  const baseURL = "http://localhost:3000/random";
  cy.visit(baseURL);

  cy.intercept("GET", "http://localhost:5000/recommendations").as("switching");
  cy.wait(time);
  cy.contains("Home").click();
  cy.wait("@switching");
  cy.get("#name");
}
