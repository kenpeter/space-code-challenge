import React, { Component } from 'react';
import { connect } from 'react-redux';
/* eslint-disable import/no-named-default */
import { default as HomeComponent } from '../../components/Home';
import { loadHomeAPI } from '../../reducers/home';

class Home extends Component {
  componentDidMount() {
    /* eslint-disable react/destructuring-assignment */
    this.props.loadHomeAPIProps();
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.length === 0 ? <p>Loading....</p> : <HomeComponent data={data} />}
      </div>
    );
  }
}

Home.defaultProps = {
  data: []
};

const mapStateToProps = state => {
  return {
    data: state.homeReducer.data
  };
};

const mapDispatchToProps = dispatch => ({
  loadHomeAPIProps: () => dispatch(loadHomeAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
