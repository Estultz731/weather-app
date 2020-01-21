import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const convertTemp = temp => Math.trunc((temp * 9) / 5 + 32);

const dayMap = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday'
};

const weatherIcon = {
  c: 'fa-sun', //clear
  lc: 'fa-cloud-sun', //light cloud
  hc: 'fa-cloud-meatball', //heavy cloud
  s: 'fa-cloud-showers-heavy', //showers
  lr: 'fa-cloud-rain', //light rain
  hr: 'fa-cloud-showers-heavy', //heavy rain
  t: 'fa-bolt', //thunderstorm
  h: 'fa-meteor', //hail
  sl: 'fa-cloud-rain', //sleet
  sn: 'fa-snowflake' //snow
};

class App extends Component {
  state = { days: [] };

  componentDidMount() {
    fetch(
      'https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/2442327/'
    ).then(response =>
      response
        .json()
        .then(weatherData =>
          this.setState({ days: weatherData.consolidated_weather })
        )
    );
  }
  render() {
    return (
      <>
        <nav>
          <a className='weather' href=''>
            Weather App
          </a>
        </nav>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 text-center'>
              <h1>Six Day Forecast</h1>
              <h3>Louisville, KY</h3>
            </div>
          </div>
          <div className='row'>
            {this.state.days.map(day => (
              <div className='col-sm-12 col-lg-2'>
                <div className='card'>
                  <div className='day'>
                    {dayMap[new Date(day.applicable_date).getDay()]}
                  </div>
                  <div className='icon'>
                    <span
                      className={`fas ${weatherIcon[day.weather_state_abbr]}`}
                    />
                  </div>
                  <div className='temp'>
                    {convertTemp(day.max_temp)} | {convertTemp(day.min_temp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
