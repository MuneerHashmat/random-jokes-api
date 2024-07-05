# Random Jokes API

This is a simple Express.js API that serves random jokes. It provides a single endpoint that returns a random joke from a predefined list.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/MuneerHashmat/random-jokes-api.git
```

2. Install the dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

If you have nodemon installed globally, you can use:

```bash
nodemon server.js
```

The server will start running on `http://localhost:10000`.

## Usage The API has one endpoint:

### GET /random_joke

This endpoint returns a random joke from the collection.

#### Request

```
GET (http://localhost:10000/random_joke)
```

#### Response

The response will be a JSON object containing a random joke. For example:

```json
{
  "id": 16,
  "joke": "Why did the database administrator leave his wife? She had one-to-many relationships."
}
```
