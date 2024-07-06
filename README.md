# Ascend

Ascend is a comprehensive test platform that enables users to sign up, log in, and take tests on various technical skills. This application features user authentication, dynamic test questions, and a results page displaying scores and time taken.

**Add-On for University Project Ecosystem:** This test platform serves as an add-on feature for the University Project Ecosystem Platform, aimed at enhancing student engagement, upskilling student capabilities, and ensuring quality project delivery.

**Collaboration Platform:** The University Project Ecosystem Platform allows universities and industry clients to collaborate on real-world projects through a cloud-based software platform. It supports teams of students in bidding on and executing projects across various domains, using AI tools and industry-standard technologies.

**Personalized Roadmaps:** In addition to this, Ascend provides personalized roadmaps using custom ML models for user upskilling. These roadmaps help users identify areas for improvement and guide them on a path to enhance their skills effectively.
## Installation and Setup
```
Prerequisites
1. Node.js
2. MongoDB
```

Follow these steps to set up and run the project locally:

 Clone the repository:
```bash
  git clone https://github.com/Manoj-Katta/Ascend.git

```
 Navigate into the project directory:
```bash
cd Ascend
```
 Server Setup:
 1. Navigate to the server directory:
 ```bash
 cd server
 ```
 2. Install Dependencies:
 ```bash
 npm install
 ```
3. Create a .env file in the server directory and add your environment variables:
```bash
PORT=3001
MONGODB_URI=your_mongodb_uri
JWT_TOKEN=your_jwt_token
```
The MONGODB_URI is the connection string to your MongoDB database. The JWT_TOKEN can be any string of your choice.

4. Start the server:
```bash
npm Start
```

Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
```bash
cd client
```
2. Install Dependencies:
```bash
npm install
```
3. Start the frontend application:
```bash
npm run dev
```
Accessing the Application:

1. Open your browser and navigate to http://localhost:5173 to access the frontend.
2. The server will be running on http://localhost:3001.
    
## Usage/Examples

**Sign Up**

1. Navigate to the sign-up page.
2. Enter your username, email, and password.
3. Click the "sign up" button.            

**Log In**  

1. Navigate to the login page.
2. Enter your email and password.
3. Click the "Log in" button.
4. After logging in, navigate to the dashboard.
5. Select a quiz category and click "Start Quiz".
6. Answer the questions and submit the quiz.
7. View your results on the results page.

**Personalized Roadmaps**
1. After completing a quiz, navigate to the personalized roadmap section.
2. View your recommended roadmap based on quiz performance.
3. Follow the steps in the roadmap to enhance your skills.

The data folder contains the sample questions that can be added to the MongoDB database.

Enjoy using Ascend!
## License

[MIT](https://choosealicense.com/licenses/mit/)

