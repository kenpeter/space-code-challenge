import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProfileAPI } from '../../reducers/createProfile';
import AutoAddress from '../AutoAddress';

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      dob: '',
      location: '',
      latitude: '',
      longitude: ''
    };
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleLocationLatLng(location, latitude, longitude) {
    this.setState({
      location,
      latitude,
      longitude
    });
  }

  createProfile() {
    console.log(this.state);
    this.props.createProfileAPIProps(this.state);
  }

  render() {
    // test
    console.log(this.state);

    return (
      <div className="container createProfile">
        <h3>Create a new profile</h3>

        <div className="field">
          <label>Name</label>
          <p>
            <input
              name="name"
              value={this.state.name || ''}
              onChange={this.handleInputChange.bind(this)}
            />
          </p>
        </div>

        <div className="field">
          <label>Email</label>
          <p>
            <input
              name="email"
              value={this.state.email || ''}
              onChange={this.handleInputChange.bind(this)}
            />
          </p>
        </div>

        <div className="field">
          <label>Date of birth</label>
          <p>
            <input
              name="dob"
              value={this.state.dob || ''}
              onChange={this.handleInputChange.bind(this)}
            />
          </p>
        </div>

        <div className="field">
          <label>Location</label>
          <AutoAddress
            handleLocationLatLng={this.handleLocationLatLng.bind(this)}
          />
        </div>

        <p>
          <button
            className="btn btn-primary"
            onClick={this.createProfile.bind(this)}
          >
            Create
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  createProfileAPIProps: item => dispatch(createProfileAPI(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfile);
