import { useRef, useEffect, useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { camelize } from "@utils/parsers";

export default function MainApp() {
  // const ws = useRef(null);
  // const markers = useState([]);
  // const mapRef = useRef(null);
  // const [locations, setLocations] = useState({});

  // useEffect(() => {
  //   const districtId = "7f5fa428-54e5-4f66-a1c8-0fe99010f7f7";

  //   ws.current = new WebSocket(`ws://localhost:8956/ws/live/${districtId}/`, null, {
  //     headers: {
  //       Authorization: "Bearer c122a4fa8e484ad3c8a69e134399fad7f1be5931",
  //     },
  //   });

  //   ws.current.onopen = () => {
  //     console.log('WebSocket is open');
  //   };

  //   ws.current.onmessage = (e) => {
  //     const data = camelize(JSON.parse(e.data));
  //     const newLocations = JSON.parse(JSON.stringify(locations));
  //     newLocations[data.driverId] = data;
  //     console.log('newLocations', newLocations);
  //     setLocations(newLocations);
  //   };

  //   ws.current.onerror = (e) => {
  //     console.log('WebSocket error: ', e.message);
  //   };

  //   ws.current.onclose = (e) => {
  //     console.log('WebSocket closed: ', e.code, e.reason);
  //   };

  //   return () => {
  //     ws.current.close();
  //   };

  // }, []);

  // const listMarkers = useMemo(() => {
  //   const elems = [];
  //   const keys = Object.keys(locations);

  //   for (let i = 0; i < keys.length; i += 1) {
  //     elems.push(locations[keys[i]]);
  //   }
  //   console.log("--> keys", elems.map(elem => elem.driverId));
  //   return elems;
  // }, [locations]);

  // return (
  //   <View style={styles.container}>
  //     <MapView ref={mapRef} style={styles.map}>
  //       {listMarkers.map(marker => (
  //         <Marker key={marker.driverId} coordinate={marker.coords} />
  //       ))}
  //     </MapView>
  //     <View style={styles.float}>
  //       <Text>Locations</Text>
  //       {Object.keys(locations).map(i => (
  //         <Text key={locations[i].driverId}>{locations[i].driverId} - {locations[i].timestamp} - markers: {listMarkers.length}</Text>
  //       ))}
  //       <Text>Markers</Text>
  //       {listMarkers.map(marker => (
  //         <Text key={marker.driverId}>{marker.driverId} - {JSON.stringify(marker.coords)}</Text>
  //       ))}
  //     </View>
  //   </View>
  // );
  return <Text>Hola</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  float: {
    position: 'absolute',
    bottom: 0,
    height: 200,
  }
});
