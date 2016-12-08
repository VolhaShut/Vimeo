@important
Feature: Download page
  I want be able to click download and get info about app

  @role(logged) @role(logout)
  Scenario: Validation details
    Given I am on Home page
     Then I click Download button
      And I wait page loaded
     Then Page title should be "title"
      And Last update should be "update"
      And Version should be "version"
      And Size should be "size"
     Then I am on Home page