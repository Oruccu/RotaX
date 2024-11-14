// RotaX.tsx
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import debounce from 'lodash.debounce';
import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import MapContainer from '../../components/MapContainer';
import styles from './RotaXStyles';
import { Region } from 'react-native-maps';

const RotaX: React.FC = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [address, setAddress] = useState<string>('');
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Konum izni verilmedi!');
        setPermissionGranted(false);
        return;
      }
      setPermissionGranted(true);
      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  const handleSearch = async (inputAddress: string) => {
    try {
      if (!permissionGranted) {
        console.log('Konum izni verilmedi, işlem yapılmaz.');
        return;
      }
      const geocode = await Location.geocodeAsync(inputAddress);
      if (geocode.length > 0) {
        const { latitude, longitude } = geocode[0];
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      } else {
        console.error('Adres bulunamadı!');
      }
    } catch (error) {
      console.error('Geocode error:', error);
    }
  };

  const debouncedSearch = debounce(() => handleSearch(address), 1000);

  return (
    <View style={styles.container}>
      <Title />
      <SearchBar
        address={address}
        onChangeAddress={setAddress}
        onSearch={debouncedSearch}
      />
      <MapContainer region={region} address={address} onRegionChange={setRegion} />
    </View>
  );
};

export default RotaX;
