# Coding Exercise 

Coding Exercise  Final interview with the candidate will be performed by a committee of employees listed on the table above. The candidate will need to be prepared for the call, with his laptop having the following systems installed and configured: 

• Prepare all the software needed to build an app using React framework 
• Have MS Teams installed to share their screen and be able to do a video-call Candidate must have their camera on and share their whole screen. Test exercise will be communicated at the interview. Coding exercise consists of 3 parts. Each part is unlocked after the previous is complete. 

Part 1 File named events.json stores list of events to be displayed on the website, each of them structured as: 
 `{
  id: 1000, //unique identifier of the event
  title: "John Anthony Live", //title to be displayed on the webpage
  price: "45.63", //price of a ticket
  date: "5742987324", //date of the event
  artist_id: 234, //identifier of the artist
  venue_id: 14, //identifier of the venue
};`

File named artists.json stores information about the artists 
`{
  id: 234, //unique identifier of the artist
  name: "John Anthony", //display name of the artist
  genre: "Pop", //genre the artist performs at
};`

File named venues.json stores information about the venues 
`{
  id: 14, //unique identifier of the venue
  name: "Staples Center", //name of the venue
  icon: "", //icon for the venue
  address: "1111 Kobe Bryant Blvd, Los Angeles, CA 90015", //address of the venue
};`

Your task is to display data on a table, structured as: <table> <thead> <th>Event Date</th> <th>Event Name</th> <th>Artist Name</th> <th>Artist Genre</th> <th>Venue</th> <th>Ticket Price</th> </thead> <tbody> ... display data here </tbody> </table> Each row must display the corresponding data from the files. Each <tr> must have id formatted as “event_%id_of_the_event” Format date as “MM/DD/YYYY hh:mm” Assume the price is in USD Only display Venue name in the “Venue” column 
  
Part 2 Extend the column Venue, by creating a <div class=”venue-details”> and making each name of the venue a clickable link. On click, div is displayed and the following info is in the div: 
- Venue Name - Venue Address - Venue icon (max size 100x100) 
  
Part 3 Make table sortable by Artist Name, Venue Name or Event Date
  

## Available Data

Here is data for this exercise.

### `events.json`
Open [https://oll-coding-exercise.s3-us-west-2.amazonaws.com/events.json](https://oll-coding-exercise.s3-us-west-2.amazonaws.com/events.json)

### `venues.json`
Open [https://oll-coding-exercise.s3-us-west-2.amazonaws.com/venues.json](https://oll-coding-exercise.s3-us-west-2.amazonaws.com/venues.json)

### `artists.json`
Open [https://oll-coding-exercise.s3-us-west-2.amazonaws.com/artists.json](https://oll-coding-exercise.s3-us-west-2.amazonaws.com/artists.json)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
