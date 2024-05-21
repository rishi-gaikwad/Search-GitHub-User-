# GitHub Profile Viewer
This is a React application that allows users to enter a GitHub username and view the corresponding profile details using the GitHub API. The application is styled with Tailwind CSS for a modern and attractive look.


# Features
Enter a GitHub username to fetch and display the user's profile details.
Displays the user's name, avatar, followers, following, public repositories, and location.
Once a username is submitted, the input field and submit button are hidden, and the profile details are shown.

# Usage
Open your browser and go to http://localhost:3000.

Enter a GitHub username in the input field and click the "Submit" button.

The profile details of the entered GitHub username will be displayed.


# flow
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── GitHubProfile.js
│   ├── hooks
│   │   ├── GitHubContext.js
│   │   └── GitHubProvider.js
│   ├── index.css
│   ├── index.js
│   └── App.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md


# 🚀 Getting Started
Node.js (v12 or later)
npm (v6 or later) or yarn
