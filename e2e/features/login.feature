@login
Feature: Login
  I want be able to login as user to Vimeo

  Scenario: Login in Vimeo
    Given I am on Home page
    Then I click "Login" button
    And "Login" form should be visible
    And I enter email address
    And I enter password
    Then I click Join with email button