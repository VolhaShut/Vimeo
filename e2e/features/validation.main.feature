@important
Feature: Scroling page
  I want be able to scroll page and see images and blocks

  @role(logged)
  Scenario: Going to Home page
    Given I am on Home page


  Scenario Outline: Scrolling page and check visible elements
      And '<screen>' should be visible
     Then I scroll down '<count>' time(s)
      #And '<screen>' should be invisible

    Examples:
    |screen             |count|
    |desktop            |  3  |
    |phonePicture       |  4  |