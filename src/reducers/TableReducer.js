const INITIAL_STATE = { amount: 1, tables: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'setTableAmount':
      return { ...state, amount: action.payload };

    case 'setTables':
    console.log(action.payload);
      return { ...state, tables: action.payload };

    case 'addOrder':
      var tempTables = [];
      for (let t of state.tables) {
        if (t.id === action.payload.idTable) {
          t.orders.push(action.payload);
        }
        tempTables.push(t);
      }
      return { ...state, tables: tempTables };

    case 'deleteOrder':
      var tempTables = [];
      for (let t of state.tables) {
        if (t.id === action.payload.idTable) {
          let i = t.orders.indexOf(action.payload);
          t.orders.splice(i,1);
        }
        tempTables.push(t);
      }
      return { ...state, tables: tempTables };

    default:
      return state;
  }
};
