import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from 'simple-react-google-maps';
import history from '../../history';
import Config from '../../config';

const Profile = ({ data }) => {
  const { googleMapApiKey } = Config;

  if (data === undefined) {
    history.push('/');
    return <div>Nothing</div>;
  }

  return (
    <form className="container profile">
      <section>
        <Link to={{ pathname: '/' }}>Back to home page</Link>
      </section>

      <br />
      <section>
        <label htmlFor="Name">Name</label>
        <p>{data.name}</p>
      </section>

      <section>
        <label>Email</label>
        <p>{data.email}</p>
      </section>

      <section>
        <label>Date of birth</label>
        <p>{data.dob}</p>
      </section>

      <section>
        <label>Location</label>
        <p>{data.location}</p>
      </section>

      <section>
        <GoogleMaps
          apiKey={googleMapApiKey}
          style={{ height: '400px', width: '100%' }}
          zoom={11}
          center={{ lat: Number(data.latitude), lng: Number(data.longitude) }}
          markers={{ lat: Number(data.latitude), lng: Number(data.longitude) }}
        />
      </section>
    </form>
  );
};

export default Profile;
