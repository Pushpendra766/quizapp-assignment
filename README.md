# Quizzer

This ReactJS web application, built with Vite, is designed to take user input, present 15 quiz questions, collect user responses, and generate a report at the end.

## Demo

You can see video demo here - [Demo Video](https://youtu.be/nP188nhOnwg)

## Live Preview

You can see live preview here - [Quizzer](https://quizzer766.netlify.app/)

## Getting Started 

To get started with this project, clone the repository and install the dependencies:
```
1. git clone https://github.com/Pushpendra766/quiz-app.git
2. cd quiz-app
3. npm install
```

## Development

To run the development server:

 `npm run dev`

This will start the development server at `http://127.0.0.1:5173/`

## Approach to the Problem

The Quiz App was created with the goal of providing an interactive and user-friendly platform for users to test their knowledge. Here's an overview of the application's components:

**Front Page:** The app begins by welcoming the user and prompting them to enter their name and email before starting the quiz.

**Quiz Questions:** After entering their details, users are presented with 15 quiz questions one by one. They can select their answers for each question.

**Report Generation:** Once all questions have been answered, the app calculates the user's score and generates a report, displaying their name, email, and the percentage of correct answers.

## Components
The major components of this application include:

**App:** The main component that handles user data input, quiz logic, and report generation.

**Question:** A component responsible for rendering individual quiz questions.

**Timer:** Displays the timer and handle submit if timer ends.

**Report:** Displays the user's report at the end of the quiz.

## Challenges
During the development of this app, a significant challenge emerged while implementing the navigation panel. Initially, I struggled to figure out how to seamlessly navigate to specific quiz questions upon clicking. This challenge was addressed by breaking down the problem into smaller parts and incrementally solving it, ensuring a smooth and user-friendly navigation experience.

Another noteworthy challenge was devising a method to generate the final report. Determining how to calculate and display the user's quiz results, including their name, email, and percentage of correct answers, posed difficulties. This challenge was ultimately overcome through careful data handling and storing user response into an array.
# quizapp-assignment
