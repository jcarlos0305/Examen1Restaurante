import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class TablesList extends Component {

  gotoTablePage(id) {
    Actions.table({ title: 'Mesa #' + id, id: id });
  }

  renderTables() {

    if (this.props.tables !== undefined) {
      return this.props.tables.map( (table) =>
        <TouchableOpacity key={table.id} style={styles.TOStyle} onPress={ () => this.gotoTablePage(table.id) }>
          <Text style={styles.textStyle}>
            {table.id}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        {this.renderTables()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TOStyle: {
    width: 75,
    height: 75,
    backgroundColor: '#30b178',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 10
  },
  textStyle: {
    fontSize: 30,
  },
  viewStyle: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
});

const mapStateToProps = state => {
  return {
    amount: state.tables.amount,
    tables: state.tables.tables
  };
};

export default connect(mapStateToProps)(TablesList);
