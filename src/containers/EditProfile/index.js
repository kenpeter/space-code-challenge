import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMaps from 'simple-react-google-maps';
import { Link } from 'react-router-dom';
import { editProfileAPI } from '../../reducers/editProfile';
import AutoAddress from '../AutoAddress';
import Config from '../../config';

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
    const { googleMapApiKey } = Config;
    const { latitude, longitude } = this.state;

    if (this.props.isUpdateSuccess) {
      alert('Update succcessfully!');
    }

    return (
      <div className="container editProfile">
        <section>
          <Link to={{ pathname: '/' }}>Back to home page</Link>
        </section>

        <br />
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
        <div className="field">
          <GoogleMaps
            apiKey={googleMapApiKey}
            style={{ height: '400px', width: '100%' }}
            zoom={11}
            center={{ lat: Number(latitude), lng: Number(longitude) }}
            markers={{ lat: Number(latitude), lng: Number(longitude) }}
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
  return {
    isUpdateSuccess: state.editProfileReducer.success
  };
};

const mapDispatchToProps = dispatch => ({
  editProfileAPIProps: item => dispatch(editProfileAPI(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
