import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const convertTemp = temp => Math.trunc((temp * 9/5) + 32)

class App extends Component {
  state = {days: []}

  componentDidMount() {
  
    fetch(
      "https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/2487956/"
    ).then(
      response => response.json().then(weatherData => this.setState({days: weatherData.consolidated_weather})),
      console.log
    )
  }
  render() {
    return (
      <>
        <nav>
         <a className="weather" href="#practice">Weather App</a>
        </nav>
        <div className="container">
          <div className="row">
            
            {
              this.state.days.map(day => (
                <div className="col-sm-12 col-lg-2">
                  <div className="card">
                    <div className="day">Monday</div>
                    <div className="icon"><span className="fas fa-cloud-showers-heavy" /></div>
                    <div className="temp">{convertTemp(day.max_temp)} | {convertTemp(day.min_temp)}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </>
    );
  }
}

export default App;
