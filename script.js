function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "026dff423910d36d7dccebd303229dbc";

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerHTML = "City not found";
            } else {
                document.getElementById("result").innerHTML = `
                    <h3>${data.name}</h3>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error fetching data";
        });
}
