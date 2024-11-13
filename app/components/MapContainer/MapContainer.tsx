import React from "react";
import { View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import styles from "./MapContainerStyles";

interface MapContainerProps {
  region: Region;
  setRegion: React.Dispatch<React.SetStateAction<Region>>;
  address: string;
}

const MapContainer: React.FC<MapContainerProps> = ({ region, setRegion, address }) => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={region}
        showsMyLocationButton
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        {region && (
          <Marker
            coordinate={region}
            title="Aranan Konum"
            description={address}
          />
        )}
      </MapView>
    </View>
  );
};

export default MapContainer;
