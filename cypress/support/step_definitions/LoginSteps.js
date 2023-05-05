import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user has arrived on the login page", () => {
    cy.visit("/");
});

Then("the user enters valid credentials", () => {
    cy.fixture("user").then((user) => {
        let { email, password } = user.userInfo
        console.log(email, password)
        cy.get('[data-cy="login-email"]').type(email);
        cy.get('[data-cy="login-password"]').type(password);
    });
});


When("the user clicks the login button", () => {
    cy.get('[data-cy="login-btn"]').click();
});

Then("the user should be redirected to the home page", () => {
    cy.url().should("include", "/patient-list");
});

Then("the user attempts to login with an invalid email", () => {
    cy.fixture("user").then((user) => {
        let { password } = user.userInfo

        cy.get('[data-cy="login-email"]').type("abdalla.test.mr");
        cy.get('[data-cy="login-password"]').type(password);
    });
});

Then("the user should see an error message for an invalid email", () => {
    cy.get('.invalid-feedback').should("contain.text", "Please double-check your email address.")
});

Then("the user enters a valid email", () => {
    cy.fixture("user").then((user) => {
        let { email } = user.userInfo

        cy.get('[data-cy="login-email"]').type(email);
    });
});


Then("the user enters an invalid password", () => {
    cy.get('[data-cy="login-password"]').type("NOTqaengineer");
});

Then("the user should see an error message for an invalid password", () => {
    cy.get('.header').should("contain.text", "Sorry, we couldn't find an account with that username/password combination. Please re-enter.")
});

