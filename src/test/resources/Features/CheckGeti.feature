@all
@Geti
Feature: Check Geti Side


  Background:
     Given call the Sogeti Side
     And cookies are accepted
     And stay on this side is selected

  @1
  Scenario: Call the Geti Side
     When clicking the Geti Button
     Then check that the Geti Side is called

