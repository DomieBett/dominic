Feature: Is it Friday yet?
    Everybody wants to know when it's Friday
    Scenario: Monday isn't Friday
        Given today is "Monday"
        When I ask whether its Friday yet
        Then I should be told "Monday - Google Search"

    Scenario: Friday is Friday
        Given today is "Friday"
        When I ask whether its Friday yet
        Then I should be told "Friday - Google Search"