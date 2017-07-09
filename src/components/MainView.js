import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleStepper from 'react-native-simple-stepper';
import { setTableAmount, setTables } from '../actions';
import { Actions } from 'react-native-router-flux';

class MainView extends Component {

  valueChanged(value) {
    this.props.setTableAmount(value);
  }

  startBtn() {

    var tables = [];
    for ( var i = 0; i < this.props.amount; i++ ) {
      tables.push(
        {
          id: i + 1,
          orders: []
        }
      );
    }
    this.props.setTables(tables);

    if (this.props.amount > 0) {
      Actions.optionsList();
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>

        <View style={styles.imageContainerStyle}>
          <Text style={styles.textStyle}>Mesas:</Text>
        </View>

        <View style={styles.imageContainerStyle}>
          <Text style={styles.textStyle}>{this.props.amount}</Text>
        </View>

        <View style={styles.imageContainerStyle}>
          <SimpleStepper
            valueChanged={(value) => this.valueChanged(value)}
            initialValue={this.props.amount}
            tintColor={'#555555'}
           />
        </View>

        <View style={styles.imageContainerStyle}>
          <TouchableOpacity style={styles.TOStyle} onPress={ () => this.startBtn() } >
            <Text style={styles.textStyle}>Empezar</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerStyle: {
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  textStyle: {
    fontSize: 25
  },
  TOStyle: {
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 10
  }
};

const mapStateToProps = state => {
  return {
    amount: state.tables.amount,
    tables: state.tables.tables
  };
};

export default connect(mapStateToProps, { setTableAmount, setTables })(MainView);
