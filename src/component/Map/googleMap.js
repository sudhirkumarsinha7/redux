import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Item, Icon, Input} from 'native-base';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {googleKey} from '../../config/Environment';
import {getLatLong} from '../../common/Util';
import Styles from '../common/Styles';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: googleKey,
        language: 'en',
      }}
    />
  );
};
export class googleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'Hyderabad',
      region: {
        // hyderabad
        latitude: 17.4121531,
        longitude: 78.1278396,
        latitudeDelta: 0.035,
        longitudeDelta: 0.035,
      },
    };
  }
  // getAddress(text){
  //   this.setState({ address: text })
  //   getLatLong(text)
  //       .then((location) => {
  //         this.setState({
  //           region: {
  //             ...this.state.region,
  //             latitude: location.lat,
  //             longitude: location.lng
  //           },
  //           currentPin: {
  //             latitude: location.lat,
  //             longitude: location.lng
  //           }
  //         })
  //       })
  //       .catch((error) => {
  //         this.props.onError(error)
  //       })
  // }
  render() {
    return (
      <View style={{flex: 10}}>
        <View style={{flex: 2, borderWidth: 1}}>
          {/* <GooglePlacesInput/> */}
          <View style={{flex: 1, borderWidth: 1, margin: 5}} />

          <View style={{flex: 1, borderWidth: 1}}>
            {/* <Input style={{...Styles.input}}  onChangeText={text => this.setState({ address: text })} value={this.state.address} /> */}
          </View>
        </View>
        <View style={{flex: 8}}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 17.4121531,
              longitude: 78.1278513,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
          />
        </View>
      </View>
    );
  }
}

export default googleMap;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    height: '100%',
    // ...StyleSheet.absoluteFillObject
  },
});
