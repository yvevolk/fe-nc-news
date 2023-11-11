# NC News Web App

# ---ABOUT ---

# A simple front-end application inspired by news sites/blogs
# Built with Node.js (v.20.5.1) + React (v. 18.2.0)
# Uses React DOM, React Router, Axios, Date Fns
# Should work on all versions of Node v.0.10 or later - v.20 is recommended
# React v. 18 recommended

# A hosted version to try out can be found here: https://nc-news-0dd5.onrender.com
# Code can be found at: https://github.com/yvevolk/nc-news
# For a list of endpoints, queries and example responses, see endpoint /api/ https://nc-news-0dd5.onrender.com/api

# --- RUNNING SCRIPTS LOCALLY ---

# 1. Ensure node.js and React are installed:
# Installation and docs can be found at:
# Node.js: https://nodejs.org/en
# React: [https://www.postgresql.org/](https://react.dev/)

# 2. Clone the GitHub repo https://github.com/yvevolk/nc-news.git to your own computer:
#   - Open terminal on your computer, navigate to your directory of choice
#   - Type 'git clone <URL>' into terminal, replacing <URL> with the URL above (no apostrophes)
#   - Run the command: this should create a local copy

# 4. Install dependencies:
#   - In fe-nc-news directory, type in terminal:
#   - npm i
#   - All dependencies should be installed: check package.json for React, React DOM, React Router DOM, Axios, Date Fns

# 5. OPTIONAL: Run app:
#   - In fe-nc-news directory, type in terminal:
#   - npm run dev
#   - App should run locally

# --- FUTURE FEATURES PIPELINE ---
#   - Ability to delete comments corresponding to logged in user (this is currently hard coded)
#   - Ability to edit comments corresponding to logged in user
#   - Put logged in user into Context instead of hard code in CommentAdder
