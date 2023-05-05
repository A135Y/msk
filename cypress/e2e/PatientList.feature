Feature: Patient List

    @working
    Scenario: Patient Data Table has the correct data for all patients
        Given the user is on the Patient List page
        Then the user should see the correct data in the Patient Data Table for all patients:
            | Patient Name    | Procedure        | Procedure Date | Pain | Satisfaction | Feedback | Pre-op PROM | 3M PROM | 6M PROM | 1YR PROM |
            | Abdalla Patient | Knee Replacement | 02 Apr 2023    |      |              |          |             |         |         |          |
            | Asli kerem      | Knee Replacement | 31 Mar 2023    |      |              |          |             |         |         |          |
            | Sam Matt        | Knee Replacement | 29 Mar 2023    |      |              |          |             |         |         |          |
            | Hasan Kara      | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | se w            | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | ahsen serda     | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | d d             | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | new p.          | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | new2 lastname   | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | Michael Kara    | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | new3 last3      | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | s g             | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | kl her          | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | Hay Kara        | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | Michael Kara    | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | ayse sari       | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | h yesi;         | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | h beyaz         | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | Michael Kara    | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |
            | sara ser        | Knee Replacement | Waiting list   |      |              |          |             |         |         |          |

    @working
    Scenario: Add a patient to the patient list
        Given the user is on the Patient List page
        When the user clicks the Add Patient button
        Then the user is taken to the Add Patient page
        When the user fills in information for a new patient
        And the user clicks the save button
        Then the user is taken back the Patient List page
        And the new patient is added to the Patient Data Table

    @not-working
    Scenario: Sidebar has the expected links
        Given the user is on the Patient List page
        Then the user should see the following links in the sidebar:
            | Patient List     |
            | Patient Overview |
            | Your Team        |
            | Account Settings |
            | Help             |




