/// <reference types="cypress" />

import * as vote from "./vote";

describe("Vote flow", () => {
  describe("Upvote", () => {
    it("must add a vote to the video", vote.upvote);
  });
  describe("Downvote", () => {
    it("must remove a vote from the video", vote.downvote);
    it(
      "must delete a video when the score is less than -5",
      vote.downvoteRemove
    );
  });
});
