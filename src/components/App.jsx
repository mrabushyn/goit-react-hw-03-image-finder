import React, {Component} from "react";
import axios from "axios";
import Select from "react-select";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.API_KEY = 'https://pixabay.com/api/';


export class App extends Component {
  render() {
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        React homework template
      </div>
    );
  }
}
