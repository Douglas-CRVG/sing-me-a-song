/// <reference types="cypress" />

import * as register from "./controllerIt/registerIt";

describe("Register flow", () => {
  it("should register successfully", register.registerSuccessfully);
});
