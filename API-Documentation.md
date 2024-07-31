# Entertainment App API Documentation

Welcome to the Entertainment App API documentation. This API provides endpoints to access a wide range of movies, TV shows, trending content, user authentication, and user watchlists.

## Endpoints

### Movies

- `/movies`: Retrieve all movies based on page number.
- `/movies/search`: Search for movies based on titles.
- `/movies/:id`: Retrieve details about a single movie based on its ID.
- `/movies/urls/:id`: Retrieve movie URLs based on their IDs.
- `/movies/cast/:id`: Retrieve movie cast based on their IDs.

### TV Shows

- `/tvshows`: Retrieve all TV shows based on page number.
- `/tvshows/search`: Search for TV shows based on titles.
- `/tvshows/:id`: Retrieve details about a single TV show based on its ID.
- `/tvshows/urls/:id`: Retrieve TV show URLs based on their IDs.
- `/tvshows/cast/:id`: Retrieve TV show cast based on their IDs.

### Trending

- `/trending`: Retrieve all trending movies and TV shows.

### User

- `/user/register`: Register a new user.
- `/user/login`: Login as an existing user.
- `/user/logout`: Logout a user.
- `/user/details`: Get details of a user using JWT for persistent login.
- `/user/watchlist`: Get a user's watchlist.
- `/user/watchlist/:id`: Add new movies or TV shows to a user's watchlist based on ID.
- `/user/watchlist/:id`: Remove movies or TV shows from a user's watchlist based on ID.




