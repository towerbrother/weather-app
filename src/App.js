import React from "react";
import Form from "./components/Form/form";
import Weather from "./components/Weather/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import "./App.css";

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
      showCurrent: true,
      showForecast: false,
      unitMeasure: "metric"
    };

    this.handleChange = e => this.setState({ queryString: e.target.value });

    this.handleSubmit = e => {
      e.preventDefault();
      this.setState({
        loading: this.state.showCurrentWeather + this.state.showForecast
      });

      if (this.state.showCurrent) {
        fetch(
          `${window.location.protocol}//api.openweathermap.org/data/2.5/weather?q=${this.state.queryString}&APPID=${API}`
        )
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
    };
  }

  render() {
    return (
      <div className="App">
        <Form
          state={this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onBoxChecked={this.handleBoxChecked}
          onRadioChecked={this.handleRadioChecked}
          onDisabled={this.handleButton}
        />
        {(this.state.dataCurrent || this.state.dataForecast) && (
          <Weather
            dataCurrent={this.state.dataCurrent}
            dataForecast={this.state.dataForecast}
            unitMeasure={this.state.unitMeasure}
          />
        )}
      </div>
    );
  }
}

export default App;
