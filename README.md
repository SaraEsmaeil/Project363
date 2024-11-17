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

### 6. Manager Profile
The Manager Profile page displays important information about the manager, such as their role and the date they joined the platform. It also provides key platform statistics, like the total number of users, the average rating, and the number of completed transactions. This page allows the manager to update their profile by adding new information. After making changes, the manager must verify these modifications with a verification code, which expires after 1 minute. If the time limit is exceeded, the page will show two buttons: "Try Again" and "Back to Edit Profile."

### 7. Personal Profile
The Personal Profile page works similarly to the manager profile but is designed for individual users. It shows user information and recent activities, such as borrowing history. Users can edit their profile by adding personal details, and they will need to verify the changes with a phone number verification code. This process is also time-sensitive, with a timer counting down for 1 minute to complete the verification. If the timer expires, users will see options to either "Try Again" or "Back to Edit Profile."

### 8. Add Items
The Add Item page enables users to add items they want to lend. The page includes fields for the item name, description, and a photo to showcase the item’s quality. Users can also select the item’s availability using a calendar. The page requires users to complete all fields, and if any information is missing, an alert will prompt them to fill in the required details. Once all information is entered, the user will receive a confirmation message saying "Info Added Successfully." The item can also be categorized, and after submitting the details, the user can click the "Add Item" button to submit the item, which will redirect them to the home page.
### 9. home page
home.html is the homepage of the website where users can learn more about our team, the goals we have set, and how to use the webpage as a lender or borrower. At the top of the page, the header allows users to navigate to their desired tab.
### 10. User dashboard
dashboard.html is a page that contains all the announcements for users regarding any new items added and maintenance updates. It also includes frequently asked questions, with answers that can be revealed by clicking on each question.
### 11. Item details
itemdetails.html contains information about the items listed in the categories. If the user clicks on an item, they will see the details, picture, and description of the item, along with the lender's name. After checking the reviews of the item below the description, the user can contact the lender to book the item for use. The booking will later be added to the notification bar. If the "Contact Lender" button does not work, it will open an email to support@kfupmlenders.com to connect with the lender and solve the issue.
