# SecureFi Dashboard
Welcome to SecureFi! This is a full-stack web dashboard application that provides a visual representation of business statistics.

## Key Features
- Interactive charts to display data in a user-friendly way
- Detailed business information and statistics
- Efficient data retrieval through server-side pagination
- User affiliate performance statistics obtained through MongoDB aggregate calls
- Material UI for a modern and attractive interface design

## Technologies
The following technologies were used in the development of this application:
- Node.js for server-side programming
- Express for building the server-side architecture
- MongoDB for storing data
- ContextAPI, Mongoose for working with MongoDB
- React for building the user interface
- Redux for state management
- Material UI for styling and component design
- Git for version control

## Usage
To run this application on your local machine, you'll need to have Node.js installed, as well as a MongoDB database set up. Once completing these prerequisites, follow these steps:
1. Clone the repository
2. `cd` into the `server` folder
3. Install the required dependencies using `npm i`
4. Retrieve your `MONGO_URL` from MongoDB with your password inserted and paste it into a newly created .env file, as well as assign a `PORT` for the server to run locally on
5. Uncomment lines 50-55 in `index.js` within the `src` directory to initialize your data 
6. Start the server and send your data to MongoDB with `npm run dev`
7. Re-comment lines 50-55 to avoid sending duplicate data to your DB on subsequent server starts or file changes
8. `cd ..` then `cd webpage` to reach the front end of the project
9. Install the required dependencies using `npm i`
10. Create a `.env.local` file
11. Paste `REACT_APP_BASE_URL=http://localhost:{PORT}`
12. Run `npm start` in your terminal to view the project!

## Contribution
I welcome any contributions to this project! If you have suggestions or would like to improve the documentation, feel free to submit a request!


