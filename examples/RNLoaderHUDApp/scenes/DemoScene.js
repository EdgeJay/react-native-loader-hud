'use strict';

import React, { Component } from 'react-native';
import RNLoaderHUD from 'react-native-loader-hud';

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
