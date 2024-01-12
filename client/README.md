- npx create-react-app ./

# Dependencies used

- npm install @mui/material @emotion/react @emotion/styled
- npm install axios
- npm install @mui/icons-material
- npm i jwt-decode
- npm i moment
- npm i react-file-base64
- npm i react-redux
- npm i react-router-dom
- npm i redux
- npm i redux-thunk
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material
- npm install @mui/system

# Steps:

- Created basic structure
- CSS for App, Posts, Post
- Created folders for redux
- Initialised Redux at app.js (root level)
- Set up Redux stote
- used dispatch at app.js (root level)
- Made Form.js and styled that
- index.js (api) => api request for post

## Folder Structure:

- client
  - src
    - App.css => For styling App
    - components
      - Form
        - Form.js
        - styles.css
      - Posts
        - Posts.js
        - styles.css
        - Post
          - Post.js
          - styles.css
    - api
      - index.js
    - actions
      - posts.js
    - reducers
      - index.js
      - posts.js
