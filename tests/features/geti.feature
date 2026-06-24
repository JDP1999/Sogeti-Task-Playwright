Feature: Check availability of Geti Side

Scenario: Call the Geti Side

Given homepage is called
When the user click on the stay on this site button
And the user accepts the cookies
And the user clicks on the geti button
Then the user should be redirected to the geti page