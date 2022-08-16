Feature: Install Playwright

    Scenario: Nav tries to install Playwright
        Given Nav opens Playwright website
        When Nav goes to Docs section
        Then Nav sees all steps for installation
