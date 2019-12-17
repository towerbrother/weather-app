import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./components/Form/form";
import Navbar from "./components/Navbar/navbar";
import WeatherCard from "./components/Weather-Card/weatherCard";

const API = "f9b82988a14039290e02b95f5e395184";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataCurrent: null,
      dataForecast: null,
      err: null,
      loading: false,
      queryString: "",
      showCurrentWeather: true,
      showForecast: false,
      unitMeasure: "metric"
    };

    this.handleChange = e => this.setState({ queryString: e.target.value });

    this.handleSubmit = e => {
      //prevent the full page refresh that happens by default in the browser
      e.preventDefault();
      this.setState({
        loading: this.state.showCurrentWeather + this.state.showForecast
      });
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
          .catch(err =>
            this.setState({ err, loading: this.state.loading - 1 })
          );
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
          .catch(err =>
            this.setState({ err, loading: this.state.loading - 1 })
          );
      }
    };

    this.handleBoxChecked = event => {
      // event.preventDefault();
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
      this.setState({ [event.target.id]: !this.state[event.target.id] });
    };

    this.handleRadioChecked = event => {
      this.setState({ unitMeasure: event.target.value });
      console.log(event.target);
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
          onRadioChecked={this.handleRadioChecked}
          onDisabled={this.handleButton}
        />
        {/* below a check to understand whether data arrived or not */}
        {this.state.dataCurrent && !this.state.dataForecast && (
          <WeatherCard
            dataCurrent={this.state.dataCurrent}
            dataForecast={this.state.dataForecast}
          />
        )}
      </div>
    );
  }
}

export default App;
