const postData = async(url = '', data = {}) => {
    console.log(data)
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        // console.log(newData);
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

postData('/addData', { date: "8.4.2020", temp: 295.24, content: "test123445" });