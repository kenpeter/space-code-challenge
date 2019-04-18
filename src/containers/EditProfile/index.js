import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProfileAPI } from '../../reducers/editProfile';
import AutoAddress from '../AutoAddress';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    const data = this.props.location.data;

    this.state = {
      _id: data._id,
      name: data.name,
      email: data.email,
      dob: data.dob,
      location: data.location,
      latitude: data.latitude,
      longitude: data.longitude
    };
  }

  componentDidMount() {
    document.querySelector('.algolia-places input').value = this.state.location;
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

  editProfile() {
    this.props.editProfileAPIProps(this.state);
  }

  render() {
    return (
      <div className="container editProfile">
        <h3>Edit profile</h3>

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

        <br />
        <p>
          <button
            className="btn btn-primary"
            onClick={this.editProfile.bind(this)}
          >
            Update
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
  editProfileAPIProps: item => dispatch(editProfileAPI(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
