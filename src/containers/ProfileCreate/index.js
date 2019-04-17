import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProfileAPI } from '../../reducers/createProfile';

class ProfileCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      dob: '',
      locationName: ''
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

  createProfile() {
    console.log(this.state);
    this.props.createProfileAPIProps(this.state);
  }

  render() {
    return (
      <div className="createProfile">
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
          <p>
            <input
              name="location"
              value={this.state.location || ''}
              onChange={this.handleInputChange.bind(this)}
            />
          </p>
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
)(ProfileCreate);
