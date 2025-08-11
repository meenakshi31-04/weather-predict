# Weather Predict

A simple web app to fetch and display real-time weather information for any city using the OpenWeatherMap API.

## Features

- Enter any city name to get current temperature, weather condition, and humidity.
- Displays weather advice based on the results.
- Clean, responsive UI.

## Setup

1. **Clone or download this repository.**
2. **Get your OpenWeatherMap API key:**  
   - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
   - Go to [API keys](https://home.openweathermap.org/api_keys) and copy your key.
3. **Insert your API key:**  
   - Open `script.js`.
   - Replace the value of `API_KEY` with your key:
     ```javascript
     const API_KEY = 'YOUR_API_KEY_HERE';
     ```
4. **Run a local server:**  
   - Open a terminal in the project folder.
   - Run:
     ```
     python3 -m http.server 8000
     ```
   - Open your browser and go to `http://localhost:8000`.

## Usage

- Type a city name in the input box and click the button.
- Weather details and advice will be shown below.

## Troubleshooting

- If you see "Could not fetch weather for that city":
  - Check your API key.
  - Make sure the city name is spelled correctly.
  - Run the app on a local server (not by double-clicking the HTML file).
  - Check your browser console for errors.
## license
-This project is open source and free to use.
