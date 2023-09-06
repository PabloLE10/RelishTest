# Relish Technical Test
Repository for Relish QA automation engineer technical test

1. After cloning the repository go to the FirstPart directory and run the commmand => npm install.
2. To run all the functions on the test run the command => node relishTest.js
3. To run the unit tests run the command => npm test
4. Use jest to get the code coverage report. Run the command => npm test -- --coverage. The report will be displayed on the terminal. 
5. To see the report in browser go to the coverage directory, then open the directory lcov-report and finally open the file index.html in your browser of preference. 

#  Test Case documentation

## Test Case ID
Let's assume the test cases are reported in Jira under a project "RT". 
The test case ID will be "RT-1"

## Test Case Description
This test covers the scenario in which a user navigates to the an e-commerce website and validates that an Item can be added to the cart and that total price in the shopping cart matches the price of the selected item. 

## Test Steps
1. The user logs into saucedemo website.
2. Then the user searches for a specific given produt. 
3. Then the user selects the product and add's it to the cart.
4. Then the user navigates to the shopping cart page.
5. Finally the user validates the final price in the shopping cart matches the price of the selected product. 

## Test Data
username: standard_user  
password: secret_sauce  
product: Sauce Labs Backpack  
price: $29.99

## Expected Results
The total amount in the shopping cart must be $29.99 which is the value of the product Sauce Labs Backpack


