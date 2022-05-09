export function registerSuccessfully() {
  const recommendation = {
    name: "Garone - Vasco x CSA",
    youtubeLink: "https://www.youtube.com/watch?v=626IIlcsS_U",
  };

  cy.visit("http://localhost:3000");

  cy.get("#name").type(recommendation.name);
  cy.get("#youtube-link").type(recommendation.youtubeLink);

  cy.intercept("POST", "http://localhost:5000/recommendations").as("insert");

  cy.get("#submit-recommendation").click();

  cy.wait("@insert");

  cy.contains(recommendation.name);
}
