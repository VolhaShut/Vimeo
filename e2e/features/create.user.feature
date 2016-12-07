@create
Feature: Create user form
  I want be able to join as user to Vimeo

  Scenario: Create a new user in Vimeo
    Given I am on Home page
    Then I click "Join" button
     And "Join" form should be visible
    Then I enter first and last name
    And I enter email address
    And I enter password
    Then I click Join with email button