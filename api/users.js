// ### API Routes

// **`/api/users`**

// * `GET` all users

// * `GET` a single user by its `_id` and populated thought and friend data

// * `POST` a new user:

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

// **BONUS**: Remove a user's associated thoughts when deleted


const router = require('express').Router();

//set up Get all and Post at api/users

router

module.exports = router;