import React from 'react';
import styled from 'styled-components';
import MapView, { Marker } from 'react-native-maps';

import { container, img } from './styles';

const Map = styled(MapView)`
  ${container};
`;

const MarkerImage = styled.Image`
  ${img};
`;

Map.Marker = ({ icon, ...rest }) => (<Marker {...rest}>
  <MarkerImage source={{ uri: icon }}/>
</Marker>);

export default Map;