const API_KEY = 'f2f18a5793e21a1c3bf7bde19f3c8896'; // Replace with your actual API key

async function getWeather() {
    const city = document.getElementById('locationInput').value.trim();
    if (!city) return alert('Enter a city name');

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error('City not found');
        const data = await res.json();
        const weather = {
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
            humidity: data.main.humidity
        };
        displayWeather(weather);
    } catch (err) {
        return; // Stop further execution after alert
    }
}
function displayWeather(w) {
    document.getElementById('condition').textContent = `Condition: ${w.condition}`;
    document.getElementById('temp').textContent = `${w.temp}°C`;
    document.getElementById('details').textContent = `Humidity: ${w.humidity}%`;
    document.getElementById('weatherDisplay').style.display = 'block';
    givePrescriptions(w);
} 