import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SimpleStepper from 'react-native-simple-stepper';
import { addOrder } from '../actions';
import { connect } from 'react-redux';

class Order extends Component {
  state = { selectedType: 'Entrada', description: '', amount: 1 };

  addOrderEvent() {
    if (this.state.description !== '') {
      const temp = {
        idTable: this.props.id,
        selectedType: this.state.selectedType,
        description: this.state.description,
        amount: this.state.amount
      };
      this.props.addOrder(temp);
      Actions.pop();
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={{flex: 9}}>

          <View style={styles.imageContainerStyle}>
            <Picker
              onValueChange={(itemValue) => this.setState({ selectedType: itemValue })}
              selectedValue={this.state.selectedType}
            >
              <Picker.Item label="Entrada" value="Entrada" />
              <Picker.Item label="Plato Principal" value="Plato Principal" />
              <Picker.Item label="Bebida" value="Bebida" />
              <Picker.Item label="Postre" value="Postre" />
            </Picker>
          </View>

          <View style={styles.imageContainerStyle}>
            <TextInput
               onChangeText={(text) => this.setState({description: text})}
               value={this.state.description}
               placeholder={'Descripción'}
            />
          </View>

          <View style={styles.stepperStyle}>
            <Text>Cantidad: {this.state.amount}</Text>
            <SimpleStepper
              valueChanged={(value) => this.setState({amount: value})}
              initialValue={this.state.amount}
              tintColor={'#555555'}
             />
          </View>

        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.viewTOpacity}>
             <TouchableOpacity style={styles.TOStyle} onPress={() => this.addOrderEvent()}>
               <Text style={styles.textStyle}>Agregar</Text>
             </TouchableOpacity>
           </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40
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
  },
  imageContainerStyle: {
    marginBottom: 20
  },
  stepperStyle: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    tables: state.tables.tables
  };
};

export default connect(mapStateToProps, { addOrder })(Order);
