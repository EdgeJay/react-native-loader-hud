/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
} from 'react-native';
import RNLoaderHUD from 'react-native-loader-hud';
import SelectionScene from './scenes/SelectionScene';
import DemoScene from './scenes/DemoScene';

class RNLoaderHUDApp extends Component {
  render() {
    return (
      <Navigator initialRoute={{ name: 'SelectionScene' }}
        configureScene={this._configureScene.bind(this)}
        renderScene={this._renderScene.bind(this)}
        style={styles.container}>
        <SelectionView />
      </Navigator>
    );
  }

  _renderScene(route, navigator) {
    if (route.name === 'SelectionScene') {
      return <SelectionScene navigator={navigator} />
    }
    else if (route.name === 'DemoScene') {
      return <DemoScene navigator={navigator} />
    }
  }

  _configureScene(route) {
    return Navigator.SceneConfigs.FloatFromRight;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('RNLoaderHUDApp', () => RNLoaderHUDApp);
