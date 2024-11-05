Feature: Login functionality

Scenario: User enters invalid email and invalid password
Given I am on the login page
When I enter valid credentials "abcdef@com" and "11122233"
And I click the login button
Then user prompted with "Some fields contain incorrect or incomplete data. Please check your entries and try again." exception

Scenario: User enters empty email and invalid password
Given I am on the login page
When I enter valid credentials "empty" and "11122222"
And I click the login button
Then user prompted with "CredentialsSignin" exception

Scenario: User enters invalid email and empty password
Given I am on the login page
When I enter valid credentials "abcdef@com" and "empty" 
And I click the login button
Then user prompted with "CredentialsSignin" exception

Scenario: User enters valid email and valid password
Given I am on the login page
When I enter valid credentials "valid email" and "valid password"
And I click the login button
#Then I should be redirected to the after login dashboard