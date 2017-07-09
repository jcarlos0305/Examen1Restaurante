import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { deleteOrder } from '../actions';

class OrderItem extends Component {

  deleteItem() {
    this.props.deleteOrder(this.props.order);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={[styles.orderTypeStyle,{ backgroundColor: (this.props.order.selectedType === 'Entrada' ? '#d2e926' : this.props.order.selectedType === 'Plato Principal' ? '#17b06b' : this.props.order.selectedType === 'Bebida' ? '#2a6ebd' : '#da269d')}]}>
          <Text>{this.props.table}</Text>
        </View>
        <View style={styles.amountStyle}>
          <Text>{this.props.order.amount}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text>{this.props.order.description}</Text>
        </View>
        <View style={styles.removeStyle}>
          <TouchableOpacity onPress={() => this.deleteItem()}>
            <Text style={{color: 'red'}}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'gray'
  },
  orderTypeStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  amountStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionStyle: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const mapStateToProps = state => {
  return {
    tables: state.tables.tables
  };
};

export default connect(mapStateToProps, { deleteOrder })(OrderItem);
