'use strict';

import React, { Component, Dimensions, Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import RNLoaderHUD from 'react-native-loader-hud';

export default class DemoScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hudVisible: false
    };
    this._onShowHUD = this._onShowHUD.bind(this);
    this._onHideHUD = this._onHideHUD.bind(this);
  }

  _onShowHUD() {
    this._loaderHUD.show();
    this.setState({ hudVisible: true });
  }

  _onHideHUD() {
    this._loaderHUD.hide();
    this.setState({ hudVisible: false });
  }

  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        {(() => {
          if (!this.state.hudVisible) {
            return (
              <TouchableHighlight onPress={this._onShowHUD}>
                <Text style={{color:'black'}}>{'Show'}</Text>
              </TouchableHighlight>
            );
          }
        })()}

        <RNLoaderHUD ref={(input) => this._loaderHUD = input} />

        {(() => {
          if (this.state.hudVisible) {
            return (
              <TouchableHighlight onPress={this._onHideHUD} style={{position:'absolute', top:30, right:20}}>
                <Text style={{color:'white'}}>{'Close'}</Text>
              </TouchableHighlight>
            );
          }
        })()}
      </View>
    );
  }
}

DemoScene.propTypes = {
  type: React.PropTypes.number.isRequired
};
