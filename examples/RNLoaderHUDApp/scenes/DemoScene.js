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

import Orientation from 'react-native-orientation';

class RNLoaderHUD extends Component {
  constructor(props) {
    super(props);
    this._orientationDidChange = this._orientationDidChange.bind(this);
  }

  render() {
    const wd = Dimensions.get('window').width;
    const ht = Dimensions.get('window').height;
    const orientation = ((this.state && this.state.orientation) ? this.state.orientation : 'PORTRAIT');
    console.log(orientation, orientation.indexOf('PORTRAIT'));
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        width: orientation === 'PORTRAIT' ? wd : ht,
        height: orientation === 'PORTRAIT' ? ht : wd,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
      },
    });

    return (
      <View ref={(input) => this._root = input} style={styles.root}>
      </View>
    );
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._orientationDidChange);
    Orientation.getOrientation((err, orientation) => {
      if (orientation) {

        this.setState({ orientation });
      }
    });
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  _orientationDidChange(orientation) {
    this.setState({ orientation });
  }
}
