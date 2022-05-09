/// <reference types="cypress" />

import * as pages from "./pages";

/*
mudar páginas
	apertar na página destino
*/

describe("Page switching flow", () => {
  it("must change page", pages.switchingPages);
});
