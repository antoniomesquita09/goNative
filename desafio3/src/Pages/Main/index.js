import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import styles from './styles';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYW50b25pbmhvbSIsImEiOiJjanZjOTA1YmwwbmhhNDFwODlvN3ZsMXB3In0.9W7kg9i9P--KG7ZGAydo8A',
);

export default class App extends Component {
  renderAnnotations = () => (
    <MapboxGL.PointAnnotation id="rocketseat" coordinate={[-49.6446024, -27.2108001]}>
      <View style={styles.annotationContainer}>
        <View style={styles.annotationFill} />
      </View>
      <MapboxGL.Callout title="Rocketseat House" />
    </MapboxGL.PointAnnotation>
  );

  render() {
    return (
      <MapboxGL.MapView
        centerCoordinate={[-49.6446024, -27.2108001]}
        style={styles.container}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}
