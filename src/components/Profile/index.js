import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from 'simple-react-google-maps';
import history from '../../history';

const Profile = ({ data }) => {
  // test
  console.log(data);

  if (data === undefined) {
    history.push('/');
    return <div>Nothing</div>;
  }

  return (
    <form className="container profile">
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
          apiKey="AIzaSyBTBt_Rg3WltGJd6esIrcqoKfhkiOoonIY"
          style={{ height: '400px', width: '100%' }}
          zoom={6}
          center={{ lat: Number(data.latitude), lng: Number(data.longitude) }}
          markers={{ lat: Number(data.latitude), lng: Number(data.longitude) }}
        />
      </section>
    </form>
  );
};

export default Profile;
