import React, { Component } from 'react';
import '../App.css';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    // Verbindet state mit Funktion
    this.state = {
      button_name: 'Click Button',
      count: 0
    };
  }

  componentDidMount() {
    console.log('mounted');
  }

  handleClick() {
    var count = this.state.count + 1;
    this.setState({
      count
    });
  }

  componentWillReceiveProps(nextProps) {}

  // if userName exists, show userName else show 'No user here'
  //{userName ? userName : 'No user here'}
  render() {
    return (
      <div>
        <p>
          <button onClick={this.handleClick.bind(this)}>
            {this.state.button_name} + {this.state.count}
          </button>
        </p>
      </div>
    );
  }
}

export default ButtonComponent;
