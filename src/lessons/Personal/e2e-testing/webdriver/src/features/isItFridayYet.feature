Feature: Is it Friday yet?
    Everybody wants to know when it's Friday
    Scenario: Monday isn't Friday
        Given today is Monday
        When I ask whether its Friday yet
        Then I should be told "Too early bruh...!!!"