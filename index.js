'use strict';

import React, { Component, Dimensions, View, Image, StyleSheet } from 'react-native';
import Orientation from 'react-native-orientation';
import images from './src/images';

export default class RNLoaderHUD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this._orientationDidChange = this._orientationDidChange.bind(this);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    if (this.state.visible) {
      const wd = Dimensions.get('window').width;
      const ht = Dimensions.get('window').height;
      const orientation = ((this.state && this.state.orientation) ? this.state.orientation : 'PORTRAIT');

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
        loaderBox: {
          width: 80,
          height: 80,
          borderRadius: 5,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        },
        loaderImage: {
          width: 60,
          height: 60,
        },
      });

      return (
        <View ref={(input) => this._root = input} style={styles.root}>
          <View style={styles.loaderBox}>
            <Image style={styles.loaderImage} resizeMode={'contain'} source={{uri: images.bars}} />
          </View>
        </View>
      );
    }
    return <View />;
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
