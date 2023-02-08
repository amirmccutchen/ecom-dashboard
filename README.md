# SecureFi Dashboard
Welcome to SecureFi! This is a web-based dashboard application that provides a visual representation of business statistics.

## Key Features
- Interactive charts to display data in a user-friendly way
- Detailed business information and statistics
- Efficient data retrieval through server-side pagination
- User affiliate performance statistics obtained through MongoDB aggregate calls
- Material UI for a modern and attractive interface design

## Technology Stack
The following technologies were used in the development of this application:
- Node.js for server-side programming
- Express for building the server-side architecture
- MongoDB for storing data
- ContextAPI, Mongoose for working with MongoDB
- React for building the user interface
- Redux for state management
- Material UI for styling and component design
- Git for version control management.

## Usage
To run this application on your local machine, you'll need to have Node.js and MongoDB installed. Once you have those set up, follow these steps:
1. Clone the repository
2. `cd` into the `server` folder
3. Install the required dependencies using `npm i`
4. Retrieve your `MONGO_URL` from MongoDB with your password inserted and paste it into your .env file, as well as assign a `PORT` for the server to run locally on
5. Start the server with `npm run dev`
6. `cd ..` then `cd webpage` to reach the front end of the project
7. Install the required dependencies using `npm i`
8. Create a `.env.local` file
9. Paste `REACT_APP_BASE_URL=http://localhost:{PORT}`
10. Run `npm start` in your terminal to view the project!

## Contribution
I welcome any contributions to this project! If you have suggestions or would like to improve the documentation, feel free to submit a request!


