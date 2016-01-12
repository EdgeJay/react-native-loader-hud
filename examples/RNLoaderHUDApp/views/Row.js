'use strict';

import React, { Component, StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class Row extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor={'#999'} style={styles.row}>
        <Text>{this.props.data}</Text>
      </TouchableHighlight>
    );
  }
}

Row.propTypes = {
  onPress: React.PropTypes.func
};

const styles = StyleSheet.create({
  row: {
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  }
});
