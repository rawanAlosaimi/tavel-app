function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formlocation = document.getElementById('location').value;
    let date = document.getElementById('dateForm').value;
    if (Client.checkForText(formlocation)) {
        console.log("::: Form Submitted :::")

        postData('http://localhost:8081/API', { location: formlocation })
            .then(function (res) {
                document.getElementById('date').innerHTML = date;
                document.getElementById('name').innerHTML = res.Geonames_data.name;
                document.getElementById('countryName').innerHTML = res.Geonames_data.countryName;
                document.getElementById('lat').innerHTML = res.Geonames_data.lat;
                document.getElementById('lng').innerHTML = res.Geonames_data.lng;
                document.getElementById('high_temp').innerHTML = res.Weatherbit_data.high_temp;
                document.getElementById('low_temp').innerHTML = res.Weatherbit_data.low_temp;
                document.getElementById('description').innerHTML = res.Weatherbit_data.description;
                document.getElementById('img').src = res.Pixabay_data.img;
            })
    } else {
        alert('Please Enter your text!');
    }
}

//POST request to add the API data
const postData = async (location = '', data = {}) => {
    console.log('Data is : ', data)
    const response = await fetch(location, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit }