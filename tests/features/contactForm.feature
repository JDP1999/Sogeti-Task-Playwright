Feature: Contact Form

Scenario: Check the contact form

Given homepage is called
When the user click on the stay on this site button
And the user accepts the cookies
And the user clicks on contact us
Then validate contact us site displayed
When the user fills the contact form
Then validate success message displayed