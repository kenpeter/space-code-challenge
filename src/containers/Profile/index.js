import React, { Component } from 'react';
import { default as ProfileComponent } from '../../components/Profile';

class Profile extends Component {
  render() {
    const data = this.props.location.data;

    return <ProfileComponent data={data} />;
  }
}

export default Profile;
