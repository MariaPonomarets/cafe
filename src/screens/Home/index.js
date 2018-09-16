import React, { Component } from 'react';
import MapContainer from 'containers/Map';
import Map from 'components/Map';

const Home = () => (
  <MapContainer>
    {({ places, myCords, onRegionChangeComplete }) => (
      <Map
        initialRegion={myCords}
        onRegionChangeComplete={onRegionChangeComplete}
      >
        {places.map(({ id, position, title, vicinity, icon }) => (
          <Map.Marker
            key={id}
            coordinate={{ latitude: position[0], longitude: position[1] }}
            title={title}
            description={vicinity}
            icon={icon}
          />
        ))}
      </Map>
    )}
  </MapContainer>
);

export default Home;