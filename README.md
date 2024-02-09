#React signup form

1. Scan through the project, try to explain the project structure;

2. Explain how StateProvider works, share your thoughts with interviewer;

3. Take a look at /src/api/mock, explain how it works;

4. Check SubmitButton color and fix it

5. Implement new SignupSuccess component, also make sure that UserName component renders new username after successfull submit

6. Implement hybrid (client+server) form validation in Signup component:

- Username, Email, Password, Repeat Password fields should have at least 6 characters length;
- Password should match Repeat Password;
- Validation should be done upon "Sign Up" button click;
- Fields that have invalid values should be marked (error and helperText props);
- API response may also have an error that should be displayed to user near corresponding field;
