# Weather-Journal App Project
Weather journal app is an asynchronous web app that uses Web API and user data to dynamically update the UI. 


## Setup project environment
Installation of Express, nodemon and Cors.

# APIS used for the project
- Openweathermap

## Starting the applications
- npm run start: starts the server on port 1777.


## Steps

Async function is used to make a GET request to the Open weather API. 

A Promise chain is used to make POST request to add the API data and the input data.

Another Promise chain is finally used to update the UI dynamically after the completed POST request.

The update value reflects the dynamic values for i. Temperature ii. Date iii. User input. IV. name and V. country.
