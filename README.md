# Album List App
This is a simple React application for managing albums. It fetches album data from the provided API, allows users to add new albums, update existing albums, and delete albums.

# Features
Fetch albums from JSONPlaceholder API
Add a new album (dummy request)
Update an existing album (dummy request)
Delete an album (dummy request)

1.Install dependencies:
npm install

2.Start the development server:
npm start

Open your browser and go to http://localhost:3000 to view the app.

# Project Setup
This project uses React for the frontend.
Redux is used for state management.
Axios is used for making HTTP requests.
The project follows a modular component-based structure for better organization and reusability.
The Redux store is configured to manage the state of albums.
The AlbumList component fetches albums from the API and displays them.
The AddAlbumForm component allows users to add new albums.
The UpdateAlbumForm component allows users to update existing albums.
The albumReducer handles actions related to albums, such as fetching, adding, updating, and deleting.

# How to Use
Fetching Albums: The list of albums is fetched from the JSONPlaceholder API when the app loads.

Adding an Album: Click on the "Add Album" button, fill in the details in the form, and submit. This will add a new album to the list (dummy request).

Updating an Album: Click on the "Edit" button next to the album you want to update, make the desired changes in the form, and submit. This will update the album (dummy request).

Deleting an Album: Click on the "Delete" button next to the album you want to delete. Confirm the action, and the album will be removed from the list (dummy request).

# Hosted Project
Link to Hosted Project ("https://radiant-squirrel-3222ef.netlify.app/")
