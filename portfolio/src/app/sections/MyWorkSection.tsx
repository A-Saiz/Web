import * as React from 'react';
import './styles/MyWorkSection.css';
import Weather from '../../weather-app/src/app/Weather';
import Form from '../../weather-app/src/app/Form';

export default class MyWorkSection extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async ({e} : {e: any}) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=a3d6a8bd4f7eeedb5cce1a43e5356a33`);
    const response = await api_call.json();
    console.log("hello" + response);
    e.preventDefault();

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
 }

  render() {
    return (
      <div className="portfolio">
        <div>
          <Form loadWeather={this.getWeather}/>
        </div>
        <div>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error} />
        </div>
      </div>
    )
  }
}