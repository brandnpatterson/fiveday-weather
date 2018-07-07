import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class GoogleMap extends Component {
  componentDidMount() {
    new window.google.maps.Map(
      ReactDOM.findDOMNode(this.refs.map),
      Object.assign(
        {},
        {
          zoom: 12,
          center: {
            lat: this.props.lat,
            lng: this.props.lon
          }
        }
      )
    );
  }

  render() {
    const style = { height: '150px', width: '250px' };

    return <div style={style} ref="map" />;
  }
}

export default GoogleMap;
