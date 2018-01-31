import React, { Component } from 'react';
import '../App.css';

class NameComponent extends Component {
  constructor(props) {
    super(props);
    // Verbindet state mit Funktion
    this.state = {
      movie: 'Black Hawk Down',
      name_displayed: 'First Name'
    };
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps_was geht: ' + nextProps.user_name);
    if (this.props.user_name !== nextProps.user_name) {
      if (nextProps.user_name.indexOf(' ') > -1) {
        this.setState({
          name_displayed: 'Full name'
        });
      } else {
        this.setState({
          name_displayed: 'First name'
        });
      }
    }
  }

  // if userName exists, show userName else show 'No user here'
  //{userName ? userName : 'No user here'}
  render() {
    const { user_name } = this.props;
    const { name_displayed } = this.state;
    return (
      <div>
        <p>{name_displayed}</p>
        <p>{user_name ? user_name : 'No user here'}</p>
      </div>
    );
  }
}

export default NameComponent;
