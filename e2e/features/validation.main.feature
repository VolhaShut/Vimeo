@important
Feature: Scroling page
  I want be able to scroll page and see images and blocks

  @role(logged)
  Scenario: Going to Home page
    Given I am on Home page


  Scenario Outline: Scrolling page and check visible elements
      And '<screen>' should be visible
     Then I scroll down '<count>' time(s)
      And '<screen>' should be invisible

    Examples:
    |screen             |count|
    |desktop            |5.5 |
    |phonePicture       |1.5  |
    |sliding            |0.8  |
    |video_ctrl         |1.5|
    |features           |3  |
    |video              |4    |
    |soundtracks        |4  |
    |videolist          |5    |
    |creators           |5  |

  @role(logout)
  Scenario: Return to Home page
      Given I scroll up

