Feature: Clicking on an individual patient in the patient list will now open the patient's file on a new page

    @working
    Scenario: Clicking on a patient will open up the patients file
        Given the user is on the Patient List page
        When the user clicks on a patient
        Then the user should be on the patient file page

    @working
    Scenario: The patient file shows the results page as expected
        Given the user is on the Patient List page
        When the user clicks on a patient
        Then the user should be on the patient file page
        And the user clicks on the Results tab
        Then the user should be on the Results page
        And the results page should shows the patients results
        And the patient reported outcomes should be shown
        And the patients other surveys should be shown

    @working
    Scenario: The patient's file will show the pathway as expected
        Given the user is on the Patient List page
        When the user clicks on a patient
        Then the user should be on the patient file page
        And the user clicks on the Pathway tab
        Then the user should be on the Pathway page
        And the Pathway page should show the patient's procedure details

    @working
    Scenario: The patient's file will show the administration as expected
        Given the user is on the Patient List page
        When the user clicks on a patient
        Then the user should be on the patient file page
        And the user clicks on the Administration tab
        Then the user should be on the Administration page
        And the Administration page should show the patient's administration records

    @not-working
    Scenario: User can successfully enter notes in patients pathway section
        Given the user is on the Patient List page
        When the user clicks on a patient
        Then the user should be on the patient file page
        And the user clicks on the Pathway tab
        Then the user should be on the Pathway page
        And the user enters notes in the notes section
        And the user clicks on the save button
        Then the note should be saved

    @not-working
    Scenario: User can submit if the patient was readmitted within the past thirty days
        Given the user is on the Patient List page
        When the user clicks on a patient
        Then the user should be on the patient file page
        And the user clicks on the Pathway tab
        Then the user should be on the Pathway page
        Then user selects a readmittion clause
        And user adds a note
        And the user clicks on the save button
        Then the note should be saved

    @not-working
    Scenario: User can submit if the patient has undergone revision for this procedure
        Given the user is on the Patient List page
        When the user clicks on a patient
        Then the user should be on the patient file page
        And the user clicks on the Pathway tab
        Then the user should be on the Pathway page
        Then user selects a revision option
        And user adds a note
        And user adds a date of the revision
        And the user clicks on the save button
        Then the revision should be saved



