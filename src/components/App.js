import React, {Component} from 'react';
import Form from './Form';
import Vehicles from './Vehicles'
import Starships from './Starships'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        vehicles: [],
        starships: [],
        value: "",
        pilot: "",
        message: "",
      }
    }

  _pilotNameChange = (event) => {
    this.setState({value: event.target.value})
  }

  _submit = (event) => {
    event.preventDefault()
    this.setState({pilot: event.target.pilot.value, value: ""})
  }

  componentDidMount() {
    this.fetchVehicles()
    this.fetchStarships()
  }

  fetchVehicles() {
    fetch('https://swapi.co/api/vehicles/?format=json')
    .then((response) => {
      return response.json();
    })
    .then((vehicles) => {
      this.setState({ vehicles });
    })
  }

  fetchStarships() {
    fetch('https://swapi.co/api/starships/?format=json')
    .then((response) => {
      return response.json();
    })
    .then((starships) => {
      this.setState({ starships });
    })
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  /*
  Store vehicles state in a variable.
  Map over this variable to access the values needed to render.
  */
  render() {
    return (
      <div className="App">
        <Form onSubmit={this._submit} onChange={this._pilotNameChange} defaultValue={this.state.value} pilot={this.state.pilot} />
        <div className="label">Vehicles:</div>
        <Vehicles vehicles={this.state.vehicles} />
        <div className="label">Starships:</div>
        <Starships starships={this.state.starships} />
      </div>
    );
  }
}


export default App;
