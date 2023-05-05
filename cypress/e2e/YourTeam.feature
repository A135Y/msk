Feature: Your Team shows the Team of the Patient

    @working
    Scenario: Clicking on Your Team in sidebar shows the Team of the Patient
        Given the user is on the Patient List page
        When the user clicks on Your Team in the sidebar
        And the user should see the following team members:
            | Name            | Role                    | Location               | Email             | Phone         |
            | me @ me         | Healthcare professional | Charing Cross Hospital | email@emial.com   |               |
            | dc d            | Healthcare professional | Charing Cross Hospital | czvxbccf@afds.com |               |
            | new team member | Healthcare professional | Charing Cross Hospital | member@member.com | +447367463623 |

    @working
    Scenario: User can add a team member to the team
        Given the user is on the Patient List page
        When the user clicks on Your Team in the sidebar
        And the user clicks on the Invite a collegue button
        Then the invite a collegue popup should be shown
        When the user enters a name and email address
        And the user clicks next
        And user fills in the invite collegue form

    @working
    Scenario: User can remove a team member from the team
        Given the user is on the Patient List page
        When the user clicks on Your Team in the sidebar
        And the user clicks on the Remove button for a team member
        Then the remove user popup should be shown
        When the user clicks on the Cancel button
        Then the remove user popup is hidden
        When the user clicks on the Remove button for a team member
        And the user clicks please remove
        Then the user should see the success message for a removed team member


# Then I should see a confirmation of an invite being set


##Success message is shown behind the popup which makes it hard to see, read and locate

##No limit on numbers for mobile number in this form

##Why is unknwon in the list of roles when it isn't accepted in the form?

