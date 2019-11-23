import React from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar/navbar";

const API = "f9b82988a14039290e02b95f5e395184";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      err: null,
      loading: false,
      queryString: ""
    };

    this.onChange = e => this.setState({ queryString: e.target.value });
    this.onSubmit = e => {
      e.preventDefault();
      this.setState({ loading: true });
      fetch(
        `${window.location.protocol}//api.openweathermap.org/data/2.5/weather?q=${this.state.queryString}&APPID=${API}`
      )
        .then(res => {
          if (!res.ok) throw res;
          return res.json();
        })
        .then(data => this.setState({ data, loading: false }))
        .catch(err => this.setState({ err, loading: false }));
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form
          queryString={this.state.queryString}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {this.state.data && <div>Weather Data Here!</div>}
      </div>
    );
  }
}

export default App;
