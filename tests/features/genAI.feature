Feature: genAi Page

Scenario: Check the genAi Page

Given homepage is called
When the user click on the stay on this site button
And the user accepts the cookies
And the user hovers the services label
And the user hovers the End-to-End Solutions
When the user clicks on the Gen AI Augmented Software House
Then verify Agentic-AI page is displayed