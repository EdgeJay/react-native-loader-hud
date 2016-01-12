'use strict';

import React, { Component, View, Text, ListView } from 'react-native';
import Row from '../views/Row';

export default class SelectionScene extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['Default'])
    };
  }

  render() {
    return (
      <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Row onPress={this._onRowPress.bind(this, rowData)} data={rowData} />} />
    );
  }

  _onRowPress(rowData, evt) {
    this.props.navigator.push({ name: 'DemoScene', type: 0 });
  }
}
