/// <reference types="cypress" />

import * as register from "./registerIt";

describe("Register flow", () => {
  it("should register successfully", register.registerSuccessfully);
});
