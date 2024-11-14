// components/MapContainer.tsx
import React from 'react';
import { View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import styles from './MapContainerStyles';

interface MapContainerProps {
  region: Region;
  address: string;
  onRegionChange: (newRegion: Region) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({ region, address, onRegionChange }) => (
  <View style={styles.mapContainer}>
    <MapView
      style={styles.map}
      region={region}
      showsMyLocationButton
      onRegionChangeComplete={onRegionChange}
    >
      <Marker coordinate={region} title="Aranan Konum" description={address} />
    </MapView>
  </View>
);

export default MapContainer;
