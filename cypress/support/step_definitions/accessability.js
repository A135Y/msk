// import { Then, Step } from "@badeball/cypress-cucumber-preprocessor";
// import "cypress-axe";

// Then("the page should be accessible", () => {
//     cy.injectAxe();
//     cy.configureAxe({
//         rules: [{ id: "region", enabled: false }],
//     });
//     cy.checkA11y();
// });

// afterEach(() => {
//     Step(this, "the page should be accessible");
// });

/**
 * This a11y feature should be used in conjunction with the cypress-axe plugin.
 * This is to make sure that the page is accessible to all users.
 */