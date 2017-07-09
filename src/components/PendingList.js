import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import OrderItem from './OrderItem';

class PendingList extends Component {

  renderOrders() {
    let orderList = [];
    for (let t of this.props.tables) {
      for (let o of t.orders) {
        orderList.push(o);
      }
    }
    console.log(orderList);
    return orderList.map( (order, index) =>
      <OrderItem key={index} order={order} table={order.idTable}/>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderOrders()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    tables: state.tables.tables
  };
};

export default connect(mapStateToProps)(PendingList);
