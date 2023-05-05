import { Given, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor";

When("the user clicks on Your Team in the sidebar", () => {
    cy.get('[href="#/team"] > .nav-wrapper > .nav-img').click();
});

Then("the user should see the following team members:", (dataTable) => {
    // Check that the pathname ends with /team
    cy.location('pathname').should('eq', '/')

    // Loop through each team member and check their information
    cy.get(".cols").each(($col, index) => {
        const name = dataTable.rows()[index + 1][0]
        const role = dataTable.rows()[index + 1][1]
        const location = dataTable.rows()[index + 1][2]
        const email = dataTable.rows()[index + 1][3]
        const phone = dataTable.rows()[index + 1][4]

        cy.wrap($col)
            .find("h3")
            .should("contain", name)

        cy.wrap($col)
            .find(".user__details p:nth-child(1)")
            .should("contain", role)

        cy.wrap($col)
            .find(".user__details p:nth-child(2)")
            .should("contain", location)

        cy.wrap($col)
            .find(".user__details p:nth-child(3)")
            .should("contain", email)

        if (phone !== "") {
            cy.wrap($col)
                .find(".user__details p:nth-child(4)")
                .should("contain", phone)
        }
    })
});


Then("the user clicks on the Remove button for a team member", (name) => {
    //getting an element like this will be weak due to the fact that the name is not unique
    cy.get(':nth-child(2) > .user > .user__inner > .user__content > .user__team-remove > p > .btn').click()
});

Then("the remove user popup should be shown", () => {
    cy.get(':nth-child(2) > .modal-container').should("be.visible");
});

Then("the remove user popup is hidden", () => {
    cy.get(':nth-child(2) > .modal-container')
        .should("not.exist");
});

//the element for the cancel button should not only have a class of .white unusual to have that alone for a cancel button

Then("the user clicks please remove", () => {
    cy.get('.white').click();
});

Then("the user should see the success message for a removed team member", () => {
    cy.get('#notify > .mr').should("be.visible");
});

Then("the user clicks on the Invite a collegue button", () => {
    cy.get('.page__header-cta > .ui').click();
});

Then("the invite a collegue popup should be shown", () => {
    cy.get('.modal-container.f1').should("be.visible").and("contain.text", "Invite a colleague");
});

When("the user enters a name and email address", () => {
    cy.get(':nth-child(1) > .veevalidated-input > .has-label > [data-cy]').type("dc d");
    cy.get(':nth-child(2) > .veevalidated-input > .has-label > [data-cy]').type("czvxbccg@afds.com");

});

Then("the user clicks next", () => {
    cy.get('#team-invite-form1 > .ui').click();
});

Then("user fills in the invite collegue form", () => {
    cy.get('.modal-container.f2').should("be.visible").and("contain.text", "Just a few quick details...");
    cy.get('.vue-tel-input > input').type("1234567890");

    cy.get(':nth-child(3) > :nth-child(1) > div[data-v-6f0ba3e8=""] > .mr').click() // Click the input field to show dropdown options
    cy.get(':nth-child(3) > :nth-child(1) > div[data-v-6f0ba3e8=""] > .mr > .menu > :nth-child(2)').click();

    cy.get(':nth-child(4) > :nth-child(1) > div[data-v-6f0ba3e8=""] > .mr').click() // Click the input field to show dropdown options
    cy.get(':nth-child(4) > :nth-child(1) > div[data-v-6f0ba3e8=""] > .mr > .menu > :nth-child(2)').click();
    cy.get('#team-invite-form2 > .button').click();
});