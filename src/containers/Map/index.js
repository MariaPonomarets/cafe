import React, { Component } from 'react';
import { calDelta, getBoundingBox } from 'utils/region';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCords: {
        latitude: 50.45,
        longitude: 30.53,
        accuracy: 5,
        latitudeDelta: 0.025,
        longitudeDelta: 0.025,
      },
      places: [],
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  onRegionChangeComplete = (region) => {
    this.calculateCords(region);
  };

  calculateCords = (region) => {
    const viewPort = getBoundingBox(region);
    this.getList(viewPort);
  };

  getLocation = () => navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude, accuracy } }) => {
    const region = calDelta(latitude, longitude, accuracy);
    this.calculateCords(region);
  }, (err) => {
    console.log('err', err);

    this.calculateCords(this.state.myCords);
  });

  getList = (viewPort) => {
    const vp = `${viewPort.join()}`;

    const headers = {
      'Accept-Encoding': 'gzip',
      'Accept-Language': 'en-US,en;q=0.9,uk;q=0.8,ru;q=0.7',
      'X-Map-Viewport': vp,
    };

    const options = {
      method: 'GET',
      headers,
    };

    const query = '?app_code=AJKnXv84fjrb0KIHawS0Tg&app_id=DemoAppId01082013GAL&cat=eat-drink&pretty=true&tf=plain&size=100';

    fetch('https://places.demo.api.here.com/places/v1/discover/explore' + query, options).then(res => res.json()).then(res => {
      this.setState({
        places: [...res.results.items],
      });
    }).catch(e => console.log('e', e));
  };

  render() {
    return this.props.children({
      ...this.state,
      onRegionChangeComplete: this.onRegionChangeComplete
    });
  }
}

export default MapContainer;