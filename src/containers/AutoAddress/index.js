import React, { Component } from 'react';
import AlgoliaPlaces from 'algolia-places-react';

class AutoAddress extends React.Component {
  render() {
    return (
      <div>
        <AlgoliaPlaces
          placeholder="Write an address here"
          options={{
            appId: 'plDQL5L5XIBF',
            apiKey: 'b07f0fe46f36015e0a96b1f102f0c8e1'
            // Other options from https://community.algolia.com/places/documentation.html#options
          }}
          onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
            console.log(suggestion.value);
            console.log(suggestion.latlng.lat);
            console.log(suggestion.latlng.lng);
            this.props.handleLocationLatLng(
              suggestion.value,
              suggestion.latlng.lat,
              suggestion.latlng.lng
            );
          }}
        />
      </div>
    );
  }
}

export default AutoAddress;
