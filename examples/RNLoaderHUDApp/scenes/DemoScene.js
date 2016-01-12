'use strict';

import React, { Component, Dimensions, Text, View, StyleSheet } from 'react-native';
//import RNLoaderHUD from 'react-native-loader-hud';

export default class DemoScene extends Component {
  render() {
    return (
      <RNLoaderHUD />
    );
  }
}

DemoScene.propTypes = {
  type: React.PropTypes.number.isRequired
};

class RNLoaderHUD extends Component {
  render() {
    console.log('render');
    return (
      <View ref={(input) => this._root = input} style={styles.root}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
  },
});
