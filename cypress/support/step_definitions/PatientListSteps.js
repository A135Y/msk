import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the Patient List page", () => {
    cy.fixture("user").then((user) => {
        let { email, password } = user.userInfo
        cy.visit("/");
        cy.get('[data-cy="login-email"]').type(email);
        cy.get('[data-cy="login-password"]').type(password);
        cy.get('[data-cy="login-btn"]').click();
    });
});

Then("the user should see the correct data in the Patient Data Table for all patients:", (dataTable) => {
    dataTable.hashes().forEach((row, index) => {
        const rowIndex = index + 1; // add 1 to account for header row
        // check patient name
        cy.get(`:nth-child(${rowIndex}) > .listcell__fullname > .listcell-name > .wrapper > div`)
            .should("contain.text", row["Patient Name"]);

        // check procedure
        cy.get(`:nth-child(${rowIndex}) > .listcell__fullname > .listcell-name > .listcell__text`)
            .should("contain.text", row["Procedure"]);

    });
});

When("the user clicks the Add Patient button", () => {
    cy.get('[data-cy="invite-patient-btn"] > span').click();
});

Then("the user is taken to the Add Patient page", () => {
    cy.get('[data-cy="page-title"] > .globalpage__header-title').should("contain.text", "Add patient");
});

When("the user fills in information for a new patient", () => {
    cy.get('[data-cy="patient-hospitalnumber"]').type("123456");
    cy.get('[data-cy="patient-dob"] > [autocomplete="off"] > .bg-white').type("01/01/1990");
    cy.get('[data-cy="patient-firstname"]').type("TestUser1");
    cy.get('[data-cy="patient-lastname"]').type("Patient");
    cy.get('[data-cy="patient-email"]').type("email@email9.com");
    cy.get('.vue-tel-input > input').type("7234567890");
    cy.get('.sex-m').click();
    cy.get('[data-cy="team-provider"] > .mr > .dropdown').click();
    cy.get('[data-cy="team-provider"] > .mr > .menu > :nth-child(2)').click();
    // cy.get('[data-cy="procedure-date"] > [autocomplete="off"] > .bg-white').type("01/01/2021"); // The date picker does not close dynamically when it is imputted which covers the selectors underneath it 
    // cy.get('[data-cy="discharge-date"] > [autocomplete="off"] > .bg-white').type("01/02/2021"); // Will most likely cause a11y issues for certain users
    cy.get('[data-cy="procedure-journey"] > .mr > .dropdown').click();
    cy.get('[data-cy="procedure-journey"] > .mr > .menu > :nth-child(2)').click();
    cy.get(':nth-child(3) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    cy.get('[data-cy="procedure-anaesthesia"] > .mr > .dropdown').click();
    cy.get('[data-cy="procedure-anaesthesia"] > .mr > .menu > :nth-child(2)').click();
});

Then("the user is taken back the Patient List page", () => {
    cy.wait(3000);
    cy.location("pathname").should("eq", "/");
});

Then("the new patient is added to the Patient Data Table", () => {
    cy.get('[data-cy="list-filter"]').type("Test Patient");
    cy.get(':nth-child(2) > .listcell__fullname > .listcell-name > .wrapper > div').should("contain.text", "Test Patient");
});