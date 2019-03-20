import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav>
         <a className="weather" href="#practice">Weather App</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-2">
              <div className="card">
                <div className="day">Monday</div>
                <div className="icon"><span className="fas fa-cloud-showers-heavy" /></div>
                <div className="temp">70 | 53</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="card">
                <div className="day">Tuesday</div>
                <div className="icon"><span className="fas fa-cloud-showers-heavy" /></div>
                <div className="temp">55 | 40</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="card">
                <div className="day">Wednesday</div>
                <div className="icon"><span className="fas fa-cloud-showers-heavy" /></div>
                <div className="temp">43 | 28</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="card">
                <div className="day">Thursday</div>
                <div className="icon"><span className="fas fa-cloud-showers-heavy" /></div>
                <div className="temp">77 | 63</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="card">
                <div className="day">Friday</div>
                <div className="icon"><span className="fas fa-cloud-showers-heavy" /></div>
                <div className="temp">65 | 50</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="card">
                <div className="day">Saturday</div>
                <div className="icon"><span className="fas fa-cloud-showers-heavy" /></div>
                <div className="temp">72 | 65</div>
              </div>
            </div>
          </div>
        </div>
    </>
    );
  }
}

export default App;
