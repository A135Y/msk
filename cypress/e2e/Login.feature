Feature: Login

    @working
    Scenario: Successful login with valid credentials
        Given the user has arrived on the login page
        And the user enters valid credentials
        When the user clicks the login button
        Then the user should be redirected to the home page

    @working
    Scenario: Unsuccessful login with invalid email
        Given the user has arrived on the login page
        And the user attempts to login with an invalid email
        Then the user should see an error message for an invalid email

    @working
    Scenario: Unsuccessful login with invalid password
        Given the user has arrived on the login page
        And the user enters a valid email
        And the user enters an invalid password
        When the user clicks the login button
        Then the user should see an error message for an invalid password