import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Table
} from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';

import { fetchInfo } from './../actions/actions_info';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      jsonList: []
    };
  }
  // https://rallycoding.herokuapp.com/api/music_albums
  //http://www.json-generator.com/api/json/get/cgjmOLeGtK?indent=2
  // Gives signal that the page is loaded so start the request
  componentDidMount() {
    this.props.dispatch(fetchInfo());
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption: selectedOption ? selectedOption : ''
    });
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    } else {
      console.log('NULL');
    }
  }

  render() {
    var thumbnail_image_style = { width: '50px', height: '50px' };
    const selectList = this.state.jsonList.map(item => {
      return { value: item.name, label: item.name };
    });

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Wonderfull Page</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://reactjs.org">
              React
            </NavItem>
            <NavItem eventKey={2} href="https://www.google.de">
              Google
            </NavItem>
            <NavDropdown
              eventKey={3}
              title="Data Views"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>;
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>Here we will list some data from sources!</p>
              <div class="row">
                <div className="col-sm-3">
                  <Select
                    name="form-field-name"
                    value={this.state.selectedOption.value}
                    onChange={this.handleChange.bind(this)}
                    options={selectList}
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div className="col-sm-9">
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.jsonList.map(item => {
                        if (
                          this.state.selectedOption === '' ||
                          item.name === this.state.selectedOption.value
                        ) {
                          return (
                            <tr>
                              <td>{item.name}</td>
                              <td>{item.address}</td>
                              <td>{item.age}</td>
                              <td>{item.company}</td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  </Table>;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// <tr>
//   <td>{item.title}</td>
//   <td>{item.artist}</td>
//   <td>
//     <img
//       style={thumbnail_image_style}
//       src={item.image}
//     />
//   </td>
// </tr>

// connect() is imported function
const App = connect()(AppComponent);

export default App;
