import React, { Component } from 'react';
import { View, TouchableOpacity, Text,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class OptionList extends Component {

  gotoTables() {
    Actions.tablesList();
  }

  gotoPending() {
    Actions.pendingList();
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.TOStyle} onPress={ () => this.gotoTables() }>
          <Text style={styles.textStyle}>Salón</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TOStyle} onPress={ () => this.gotoPending() }>
          <Text style={styles.textStyle}>Cocina</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TOStyle: {
    flex: 1,
    width: 354,
    backgroundColor: '#30b178',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'black'
  },
  textStyle: {
    fontSize: 60,
  },
});

export default OptionList;
