import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";

let patientName;
When("the user clicks on a patient", () => {
    //get the inner text of the first patient in the list
    cy.get(':nth-child(1) > .listcell__fullname > .listcell-name > .wrapper > div').invoke('text').then((text) => {
        //store the text in a variable
        patientName = text
        //click on the first patient in the list
        cy.get(':nth-child(1) > .listcell__fullname > .listcell-name > .wrapper > div').click()
    })
});

Then("the user should be on the patient file page", () => {
    cy.get('[data-cy="page-title"] > .globalpage__header-title').should("contain.text", patientName)
});

When("the user clicks on the Results tab", () => {
    cy.get('#results-tab')
        .should("be.visible")
        .click();
});

When("the user clicks on the Pathway tab", () => {
    cy.get('#procedure-tab')
        .should("be.visible")
        .click();
});

When("the user clicks on the Administration tab", () => {
    cy.get('#admin-tab')
        .should("be.visible")
        .click();
});


Then("the user should be on the Results page", () => {
    cy.get('.ui.active > .tab__wrapper > :nth-child(1) > .tab-cpt > :nth-child(1) > .tab-cpt-title').invoke('text').then((text) => {
        expect(text.trim()).to.equal('Milestones')
    })
});

Then("the user should be on the Pathway page", () => {
    cy.get('.ui.active > .tab__wrapper > :nth-child(1) > .tab-cpt > :nth-child(1) > .tab-cpt-title').invoke('text').then((text) => {
        expect(text.trim()).to.equal('Procedure details')
    })
});

Then("the user should be on the Administration page", () => {
    cy.get('.ui.active > .tab__wrapper > :nth-child(1) > .tab-cpt > :nth-child(1) > .tab-cpt-title').invoke('text').then((text) => {
        expect(text.trim()).to.equal('Patient details')
    })
});

Then("the patient reported outcomes should be shown", () => {
    cy.get('.ui.active > .tab__wrapper > :nth-child(2) > .tab-cpt > :nth-child(1) > .tab-cpt-title').should("contain.text", "Patient-Reported Outcome Measures (PROMs)")
});

Then("the patients other surveys should be shown", () => {
    cy.get('.ui.active > .tab__wrapper > :nth-child(3) > .tab-cpt > :nth-child(1) > .tab-cpt-title').should("contain.text", "Other surveys")
});


Then("the results page should shows the patients results", () => {
    //Verify that each milestone has a date, description, and icon.
    cy.get('.mr-timeline__row').each(($row) => {
        cy.wrap($row).within(() => {
            cy.get('.mr-timeline__date').should('be.visible');
            cy.get('.mr-timeline__content').should('be.visible');
            cy.get('.mr-timeline__content-icon').should('be.visible');
        });
    });
});

/**
 * 
 * I want the details below to be rendered from the users information in the patient list ideally but this is enough for now
 */

Then("the Pathway page should show the patient's procedure details", () => {
    cy.get('#procedure-details-form > :nth-child(1) > .field > :nth-child(1) > label').should("contain.text", "Procedure date");
    cy.get(':nth-child(2) > .field > label').should("contain.text", "Discharge date");
    cy.get(':nth-child(3) > .field > :nth-child(1) > label').should("contain.text", "Procedure");
    cy.get('[data-cy="procedure-journey"] > .mr').should("contain.text", "msk.ai: Knee Replacement");
    cy.get('.v-item--active > .v-input--selection-controls__input > .v-input--selection-controls__ripple').should("be.visible");
});

Then("the Administration page should show the patient's administration records", () => {
    cy.get('.ui.active > .tab__wrapper > :nth-child(1) > .tab-cpt > :nth-child(1) > .tab-cpt-title').should("contain.text", "Patient details")
    cy.get(':nth-child(1) > [data-v-0787a7e5=""] > .veevalidated-input > .label-section > label').should("contain.text", "Patient ID");

    // cy.fixture("user").then((user) => {
    //     let { id, DOB, name, lastName, email } = user.userInfo;
    // cy.get('[data-cy="patient-hospitalnumber"]').should("contain.text", id);
    // cy.get('[data-cy="patient-dob"] > [autocomplete="off"] > .bg-white').should("contain.text", DOB);
    // cy.get('[data-cy="patient-firstname"]').should("contain.text", name);
    // cy.get('[data-cy="patient-lastname"]').should("contain.text", lastName);
    // cy.get('[data-cy="patient-email"]').should("contain.text", email);
    // });

    //input values doesn't share the text fields cannot retrieve using cy.get etc... maybe done on purpose
});

