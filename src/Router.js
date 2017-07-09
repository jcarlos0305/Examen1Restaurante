import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainView from './components/MainView';
import OptionList from './components/OptionList';
import TablesList from './components/TablesList';
import PendingList from './components/PendingList';
import Table from './components/Table';
import Order from './components/Order';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 55  }}>
      <Scene key="main" component={MainView} title="Bienvenido" initial/>
      <Scene key="optionsList" component={OptionList} title="Seleccione una opción"/>
      <Scene key="tablesList" component={TablesList} title="Mesas"/>
      <Scene key="pendingList" component={PendingList} title="Pendientes"/>
      <Scene key="table" component={Table} />
      <Scene key="order" component={Order} />
    </Router>
  );
};

export default RouterComponent;
