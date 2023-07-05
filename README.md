# Bootcamper's Survival Guide 

A React app that is designed to help School of Code Bootcamper's in their learning journey by creating separate forums for each week of the course. The app allows users to post questions and answers and allows users to refer back to any of the weeks at any point.

This project task was a way of consolidating everything I have learnt so far. It was built in React in an agile team of 4 and was ideated, designed, built and presented in 5 days.

## Installation and Setup Instructions
Available to view on netlify live server - https://bootcampers-survival-guide.netlify.app
Please see usage below.

Alternatively:

You will need `node` and `npm` installed on your machine.

Clone the repo:

`https://github.com/usama-asghar1/BootcampersSurvivalGuide.git`

Move into the `my-app` directory:

`cd my-app`

Install the required npm modules:

`npm install`

Start the application:

`npm start`

## Usage

1. Press Login to move into the main page NOTE: There is no authentication so you can press login without entering any details
2. Press on the week you want to view, hover to see different topics
3. Add a comment to each forum NOTE: Only week 1 and week 2 have a comment section hard coded in
   
## Lessons Learned

- Blogpost and comment form created - broken down into individual compenents using a component tree, with each component having its own state and props using some React tools, such as useState and useEffect. This was the first time I had done this and it was a great way to understand how to break down a problem into smaller parts and then build it back up again.
- Use of CSSGrid and mapping through arrays - I was able to understand how to re-render components and display them in a grid structure. Also, understanding when it is better to not use an imported library as they can be very bloated.
- Researching React Router - This was again the first time I had done this. With the help of a colleague, I was able to understand how to use components from a front end library. Also understanding when it is better to not use a library as they can be very bloated.

## Tech Stack

**Client:** React, JavaScript, HTML, CSS

## Improvements

Potential future improvements:

- Add a navigation bar at the top of the page that has a Home Button, Burger Icon drop down menu etc.
- Add a backend so that the each forum is stored in a database and can be retrieved 
- Add authentication for the login page so that users can login in their own profile and post questions and answers
