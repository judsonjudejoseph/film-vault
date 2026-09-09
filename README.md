# 🎬 FilmVault

A React-based movie discovery and watchlist application powered by The Movie Database (TMDB) API.

🌐 **Live Demo:**  
https://judsonjudejoseph.github.io/film-vault/

## Features

- 🎬 Browse popular movies and TV content
- 🔄 Pagination for browsing content
- ❤️ Add and remove titles from your watchlist
- 💾 Persist watchlist data using browser local storage
- 🧭 Navigation between Movies and Favorites
- 📱 Responsive user interface
- 🔌 Fetch movie data using the TMDB API

## Tech Stack

- **React.js** — UI development
- **Vite** — Development and production build tooling
- **JavaScript (ES6+)**
- **Axios** — API requests
- **React Router** — Client-side navigation
- **Tailwind CSS**
- **Bootstrap**
- **TMDB API** — Movie/TV data

## Project Structure

```text
src/
├── components/
│   ├── Banner.jsx
│   ├── MovieCard.jsx
│   ├── Movies.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   ├── WatchList.jsx
│   └── Utility/
│       └── genre.js
├── App.jsx
├── main.jsx
└── index.css
🚀 Running Locally
Clone the repository-
    git clone https://github.com/judsonjudejoseph/film-vault.git
    cd film-vault

Install dependencies-
    npm install

Configure the TMDB API(Create a .env file in the project root):
    VITE_TMDB_API_KEY=your_tmdb_api_key

Start the development server-
    npm run dev

📦 Production Build-
    npm run build

🚀 Deployment

FilmVault is deployed on GitHub Pages using GitHub Actions.

Every push to the main branch triggers the deployment workflow, which:

Installs the project dependencies
Builds the React application
Generates the production files
Deploys the build to GitHub Pages
🔐 Environment Variables

The TMDB API key is provided through an environment variable during development and deployment.

The .env file is excluded from version control using .gitignore.

Note: Since FilmVault is a client-side application, the API key used by the frontend is ultimately exposed to the browser. The environment variable prevents the key from being committed directly to the source code, but it should not be considered a server-side secret.

🎯 Project Purpose

FilmVault was developed as a frontend portfolio project to demonstrate:

React component-based development
API integration
Client-side routing
State management
Browser Local Storage
Responsive UI development
Production builds and deployment
Git and GitHub workflow