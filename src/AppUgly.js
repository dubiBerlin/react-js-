import React, { Component } from 'react';
import './App.css';
import NameComponent from './components/NameComponent';
import ButtonComponent from './components/ButtonComponent';

class App extends Component {
  constructor(props) {
    super(props);
    // Verbindet state mit Funktion
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      array: ['welcome', 'to', 'my', 'course'],
      text: 'What is love?',
      user_name: 'Dubravko',
      profession: 'Programmer'
    };
  }

  componentDidUpdate() {
    console.log('Did update');
  }

  // react build in Methode
  componentDidMount() {
    console.log('mounted');
  }

  handleClick() {
    this.setState({
      user_name: 'Dubravko Dubrovnik',
      text: 'Sportler and gamer'
    });
  }

  handleButtonComponentClick() {}

  render() {
    var name = this.state.user_name;
    var word = 'I love writing React and Mongo and Node';
    var style = { fontSize: '10px' };
    var nameStyle = { color: '#ff01a32' };

    return (
      <div style={style} className="App-header">
        <p style={nameStyle}>
          {this.state.user_name} - {this.state.profession}
        </p>
        <p>{word}</p>
        <p>{this.state.text}</p>
        <img src="https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg" />
        <br />
        {this.state.array.map(word => {
          return <p key={word}>{word}</p>;
        })}
        <br />

        <NameComponent user_name={this.state.user_name} />
        <button onClick={this.handleClick.bind(this)}>
          <NameComponent />
        </button>
        <ButtonComponent />
      </div>
    );
  }
}

export default App;
