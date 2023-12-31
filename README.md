# Relish Technical Test
## Parts 1 & 2 - Unit Tests and Code Coverage
Repository for Relish QA automation engineer technical test

1. After cloning the repository go to the FirstPart directory and run the commmand => npm install.
2. To run all the functions on the test run the command => node relishTest.js
3. To run the unit tests run the command => npm test
4. Use jest to get the code coverage report. Run the command => npm test -- --coverage. The report will be displayed on the terminal. 
5. To see the report in browser go to the coverage directory, then open the directory lcov-report and finally open the file index.html in your browser of preference. 

## Part 3 - Test Case documentation

### Test Case ID
Let's assume the test cases are reported in Jira under a project "RT". 
The test case ID will be "RT-1"

### Test Case Description
This test covers the scenario in which a user navigates to the an e-commerce website and validates that an Item can be added to the cart and that total price in the shopping cart matches the price of the selected item. 

### Test Steps
1. The user logs into saucedemo website.
2. Then the user searches for a specific given produt. 
3. Then the user selects the product and add's it to the cart.
4. Then the user navigates to the shopping cart page.
5. Finally the user validates the final price in the shopping cart matches the price of the selected product. 

### Test Data
username: standard_user  
password: secret_sauce  
product: Sauce Labs Backpack  
price: $29.99

### Expected Results
The total amount in the shopping cart must be $29.99 which is the value of the product Sauce Labs Backpack

### Actual Result
The total amount in the shopping cart is 29.99 and the product in the shopping cart is Sauce Labs Backpack

### Pass/fail rate
100%  
<img width="763" alt="Screenshot 2023-09-06 at 03 08 06" src="https://github.com/PabloLE10/RelishTest/assets/13749596/2ea7cef4-eb12-41de-ae8c-cf69b933cf56">

## Part 4 - Cypress automation
1. After cloning the project go to the directory Cypress and run the command => npm install
2. Then to run the automation project run the command => npm run cypress:run
3. Validate the results on the terminal

## Part 5 - KPI Analysis from Unit tests and Cypress automation
3 of the most important KPIs or QA metrics for automation are: Code Coverage, Automated tests and Passed Tests. It is important to highlight that there are other important metrics to aplly in the QA Process for both manual and automated testing but those apply in a deeper analysis and a bigger project. This other metrics are: defects closure rate, covered requirements, defects fixed per day and defect density among others. 

Code Coverage: In the unit tests is 95% approx with a 100% on functions tested.  
Automated tests: Since there is only 1 test case created, the automated tests percentage is 100%. 
Passed Tests: The pass rate for the automation project is 100%.

## Part 6 - Bonus
Workflow added. The unit tests will be run when any push has been made to the main branch.
The code coverage report is generated in the workflow and then the report is being published as an artifact of the workflow. 
To see the report click on actions tab then select the latest workflow run and in the artifacts section you can see the uploaded report. 