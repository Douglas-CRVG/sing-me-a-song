import { faker } from "@faker-js/faker";
export function registerSuccessfully() {
  cy.visit("http://localhost:3000");
  createRecommendation();
}

export function createRecommendation() {
  const baseURL = "http://localhost:5000/recommendations";
  const recommendation = {
    name: faker.internet.userName(),
    youtubeLink: "https://www.youtube.com/watch?v=626IIlcsS_U",
  };

  cy.get("#name").type(recommendation.name);
  cy.get("#youtube-link").type(recommendation.youtubeLink);

  cy.intercept("POST", baseURL).as("insert");

  cy.get("#submit-recommendation").click();

  cy.wait("@insert");

  cy.contains(recommendation.name);
}
