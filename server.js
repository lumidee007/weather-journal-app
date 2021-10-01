// Setup empty JS object to act as endpoint for all routes
const projectData = {};

const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use(cors());

app.use(express.static('website'));


// Setup Server
const port = process.env.PORT || 1777;
const server = app.listen(port, () => console.log(`weather app running on localhost: ${port}`));



//addData post route
app.post('/addNewData', addNewData);

function addNewData(req, res) {

    let data = req.body;

        projectData.date = data.date
        projectData.temp = data.temp
        projectData.content = data.content
        projectData.name = data.name
        projectData.country = data.country

    res.send(projectData)
    console.log(projectData)
}


//projectData get route
app.get("/allData", (req, res) => res.send(projectData));