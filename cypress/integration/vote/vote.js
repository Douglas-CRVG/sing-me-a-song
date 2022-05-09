import { createRecommendation } from "../register/registerIt";

const baseURL = "http://localhost:3000/";
const time = 1000;

export function upvote() {
  cy.visit(baseURL);
  cy.get("#up").click();
  cy.wait(time);
}

export function downvoteFlow() {
  cy.visit(baseURL);
  downvote();
}

function downvote() {
  cy.get("#down").click();
  cy.wait(time);
}

export function downvoteRemove() {
  cy.visit(baseURL);
  createRecommendation();
  downvote();
  downvote();
  downvote();
  downvote();
  downvote();
  downvote();
}
