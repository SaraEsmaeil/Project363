# SWE363-Project

# mainPage.html
This is the login page for the KFUPMLenders website. Users can log in by entering their registered phone number and password. 
The site uses a dummy database for demonstration purposes, containing the following sample account:

## Sample Account
- **First Name:** Shahad
- **Last Name:** Sulais
- **Phone Number:** +966505865948
- **Password:** Shahad123456

## Features

### 1. Login Process
- If the user provides valid credentials, they will successfully log in.
- If the credentials are invalid, an appropriate error message will be displayed.

### 2. Account Creation
- Users can create a new account by clicking the **Sign Up** button and entering their details. 
  These details will be added to the dummy database.

### 3. Forgot Password
- If a user forgets their password, they can click the **Forgot Password** button.
- The system will prompt the user to enter the phone number linked to their profile.
- An SMS with a validation code will be sent to the entered phone number. 
  *(For demonstration purposes, the validation code is always `123456`.)*

### 4. Password Reset
- After entering the correct validation code, the user can reset and confirm their new password.
- Messages will guide the user through the process.

### 5. Invalid Validation Code
- If the user enters the wrong validation code, they will see two options:
  - **Resend:** Send a new validation code *(fixed as `123456` for this demonstration)*.
  - **Try Again:** Retry the same code without requesting a new one.
