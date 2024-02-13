# Authentication App

This is a Node.js application implementing authentication functionalities including signup, login, forgot password, and reset password.

## Getting Started

To get the application running locally:

- Clone this repository
- Install dependencies with `npm install`
- Create a `.env` file in the root directory and set up your environment variables (see `.env.example` for a template)
- Run `npm start` to start the application

## Contributing

To contribute to this project:

- Fork the repository
- Create a new branch for your feature
- Write your code and commit changes
- Push to your fork and submit a pull request

## API Documentation

The API endpoints are documented using Postman. Import the provided Postman collection to test the endpoints.

## Error Handling

The application includes custom error handling for various scenarios such as duplicate key errors, cast errors, JWT expired token errors, validation errors, and development errors.

## Security

Passwords are hashed using bcryptjs before being stored in the database. JSON Web Tokens (JWT) are used for authentication and authorization.

## Email Integration

Nodemailer is used to send password reset links to users' Gmail accounts.

## Environment Variables

- `DATABASE_LOCAL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT
- `JWT_EXPIRES_IN` - JWT expiration time
- `EMAIL_USERNAME` - Gmail username for sending emails
- `EMAIL_PASSWORD` - Gmail password for sending emails
- `PORT` - Port number for the application to listen on
```

This concludes a fully working implementation.INFO:httpx:HTTP Request: POST https://api.openai.com/v1/chat/completions "HTTP/1.1 200 OK"
```sh
npm install
npm run dev