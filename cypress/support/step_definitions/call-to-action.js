import { Given, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor";

//This file is for the call to action features that will remain consistent across all pages

When("the user clicks the save button", () => {
    cy.get('[data-cy="invite-save-btn"]')
        .should("be.visible")
        .click();
});

Then("the user clicks on the Cancel button", () => {
    cy.get('.cancel').click()
});