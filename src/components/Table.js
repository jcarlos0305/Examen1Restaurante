import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import OrderItem from './OrderItem';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class Table extends Component {

  renderOrders() {
    let orders = [];
    for (let t of this.props.tables) {
      if (t.id === this.props.id) {
        orders = t.orders;
      }
    }
    return orders.map( (order, index) =>
      <OrderItem key={index} order={order}/>
    );
  }

  addOrder() {
    Actions.order({ title: this.props.title, id: this.props.id });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <ScrollView >
          {this.renderOrders()}
        </ScrollView>
        <View style={styles.viewTOpacity}>
          <TouchableOpacity style={styles.TOStyle} onPress={() => this.addOrder()}>
            <Text style={styles.textStyle}>
              Agregar a orden
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  viewTOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  TOStyle: {
    height: 50,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30b178'
  },
  textStyle: {
    fontSize: 30
  }
});

const mapStateToProps = state => {
  return {
    tables: state.tables.tables
  };
};


export default connect(mapStateToProps)(Table);
