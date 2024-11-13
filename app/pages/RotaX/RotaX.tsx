import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import debounce from "lodash.debounce";
import styles from "./RotaXStyles";
import Icon from "react-native-vector-icons/FontAwesome"; // İkon setinizi seçin

const RotaX: React.FC = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825, // Başlangıç enlem (örneğin, San Francisco'nun koordinatları)
    longitude: -122.4324, // Başlangıç boylamı
    latitudeDelta: 0.05, // Harita zoom düzeyi
    longitudeDelta: 0.05, // Harita zoom düzeyi
  });

  const [address, setAddress] = useState<string>(""); // Kullanıcının girdiği adres
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false); // Konum izni durumu

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Konum izni verilmedi!");
        setPermissionGranted(false);
        return;
      }
      setPermissionGranted(true);
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  // Adres arama fonksiyonu
  const handleSearch = async (inputAddress: string) => {
    try {
      if (!permissionGranted) {
        console.log("Konum izni verilmedi, işlem yapılmaz.");
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
        console.error("Adres bulunamadı!");
      }
    } catch (error) {
      console.error("Geocode error:", error);
    }
  };

  // Debounced search function sadece butona basıldığında çalışacak
  const debouncedSearch = debounce((inputAddress: string) => {
    handleSearch(inputAddress);
  }, 1000); // 1 saniye bekle

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>RotaX</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          {/* Kullanıcının adres girmesi için input alanı */}
          <TextInput
            style={styles.input}
            placeholder="Adres veya konum girin (örneğin, Ankara)"
            onChangeText={(text) => setAddress(text)} // Adres girildikçe sadece state güncelleniyor
            value={address} // Input alanındaki değer state ile bağlanıyor
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => debouncedSearch(address)} // Butona tıklanınca debounce fonksiyonu çalışacak
        >
          {/* Arama butonuna basıldığında ikon gösterilecek */}
          <Icon name="location-arrow" size={25} color="white" />{" "}
          {/* Burada 'search' ikonu kullanılıyor */}
        </TouchableOpacity>
      </View>
      {/* Harita container'ı */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={region} // Harita bölgesini güncellenmiş region state'i ile ayarlıyoruz
          showsMyLocationButton // Kullanıcının konumunu gösteren buton
          onRegionChangeComplete={(newRegion) => setRegion(newRegion)} // Harita kaydırıldığında region'ı güncelliyoruz
        >
          {region && (
            <Marker
              coordinate={region} // Marker'ı region'daki koordinatlarla yerleştiriyoruz
              title="Aranan Konum" // Marker üzerine başlık
              description={address} // Marker üzerine açıklama (girilen adres)
            />
          )}
        </MapView>
      </View>
    </View>
  );
};

export default RotaX;
