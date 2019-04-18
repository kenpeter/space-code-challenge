import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ data }) => {
  function buildLayout() {
    const res = data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>

          <td>
            <Link
              to={{
                pathname: '/profile',
                data: {
                  name: item.name,
                  email: item.email,
                  dob: item.dob,
                  latitude: item.latitude,
                  longitude: item.longitude,
                  location: item.location
                }
              }}
            >
              {item.name}
            </Link>
          </td>

          <td>
            <Link 
              to={{ 
                pathname: '/edit-profile',
                data: {
                  _id: item._id,
                  name: item.name,
                  email: item.email,
                  dob: item.dob,
                  latitude: item.latitude,
                  longitude: item.longitude,
                  location: item.location
                }
              }}>
              Edit
            </Link>
          </td>
        </tr>
      );
    });

    return res;
  }

  return (
    <div className="home">
      <br />
      <p style={{ textAlign: 'center' }}>
        <Link className="btn btn-primary" to="/create-profile">
          Create a profile
        </Link>
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{buildLayout()}</tbody>
      </table>
    </div>
  );
};

export default Home;
