/// <reference types="cypress" />

import * as pages from "./pages";

describe("Page switching flow", () => {
  it("must change page", pages.switchingPages);
});
