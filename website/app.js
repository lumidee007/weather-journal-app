/* Global Variables */
const apiKey = "ae8183305930109bde697b966d0122af&units=imperial";
const generate = document.getElementById("generate");

//  new date instance 
let d = new Date();
let newDates = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;


generate.addEventListener('click', performAction);

function performAction(e) {
    let d = new Date();
    let newDates = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;
    let myFellings = document.getElementById("feelings").value;
    let zipCode = document.getElementById('zip').value;

    e.preventDefault();

   if(zipCode !== "") {
    weatherCondition(zipCode)
    .then(data => {

        let dataInfo = {
            date: newDates,
            temp: data.main.temp,
            content: myFellings,
            name: data.name,
            country: data.sys.country
        }

        postData("/addNewData", dataInfo)

        updateUI()
        clearText();
    })
    .catch(err => console.log(err));
   } else {
       alert("Add the correct zip code.")
   }



};


async function weatherCondition (zipCode){
    const baseURL = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?zip=${zipCode}&appid=${apiKey}`;

    const res = await fetch(baseURL + query);

    try {
        const data = await res.json();
        console.log(data)
        return data;

    } catch (err) {
        console.log("error", err);

    }
};


//POST ROUTE
const postData = async(url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    try {
        const updatedData = await res.json();
        // console.log(updatedData);
        return updatedData
    } catch (err) {
        console.log("error", err);
    }
}


//Update the UI dynamically
const updateUI = async() => {

    const request = await fetch('/allData');

    try {
        const allData = await request.json();
        let {date, temp, content, name, country} = allData;

        document.getElementById('entryHolder').style.display = "block";
        document.getElementById('date').innerHTML = date;
        document.getElementById('temp').innerHTML = temp;
        document.getElementById('content').innerHTML = content;
        document.getElementById('name').innerHTML = name;
        document.getElementById('country').innerHTML = country;

        console.log(allData);

    } catch (error) {
        console.log("error", error);
    }
}

//clear input field
const clearText = () => {
    document.getElementById('zip').value = "";
    document.getElementById("feelings").value = "";
}