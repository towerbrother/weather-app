import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./components/Form/form";
import Navbar from "./components/Navbar/navbar";
import Output from "./components/Output/output";

const API = "f9b82988a14039290e02b95f5e395184";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataCurrent: null, //what we get from OpenWeatherAPI
      dataForecast: null,
      err: null, //what we get from OpenWeatherAPI if something goes wrong
      loading: false, //??? not sure why needed this
      queryString: "", //input from user
      showCurrentWeather: true,
      showForecast: false
    };

    this.handleChange = e => this.setState({ queryString: e.target.value });

    this.handleSubmit = e => {
      //prevent the full page refresh that happens by default in the browser
      e.preventDefault();
      this.setState({ loading: true });
      if (this.state.showCurrentWeather) {
        fetch(
          `${window.location.protocol}//api.openweathermap.org/data/2.5/weather?q=${this.state.queryString}&APPID=${API}`
        )
          //promise - it makes sure that these actions are performed one after the other
          .then(res => {
            if (!res.ok) throw res;
            return res.json();
          })
          .then(dataCurrent => this.setState({ dataCurrent, loading: false }))
          .catch(err => this.setState({ err, loading: false }));
      }

      if (this.state.showForecast) {
        fetch(
          `${window.location.protocol}//api.openweathermap.org/data/2.5/forecast?q=${this.state.queryString}&APPID=${API}`
        )
          //promise - it makes sure that these actions are performed one after the other
          .then(res => {
            if (!res.ok) throw res;
            return res.json();
          })
          .then(dataForecast => this.setState({ dataForecast, loading: false }))
          .catch(err => this.setState({ err, loading: false }));
      }
    };

    this.handleBoxChecked = event => {
      // event.preventDefault();
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
      this.setState({ [event.target.id]: !this.state[event.target.id] });
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form
          //these attributes are passed as props to the Form component
          state={this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onBoxChecked={this.handleBoxChecked}
          onDisabled={this.handleButton}
        />
        {/* below a check to understand whether data arrived or not */}
        {/* {this.state.data && <Output data={this.state.data} />} */}
        {this.state.data && <div>Weather Data Here!</div>}
      </div>
    );
  }
}

export default App;
