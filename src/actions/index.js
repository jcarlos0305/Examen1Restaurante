export const setTableAmount = (amount) => {
  return {
    type: 'setTableAmount',
    payload: amount
  };
};

export const setTables = (tables) => {
  return {
    type: 'setTables',
    payload: tables
  };
};

export const addOrder = (order) => {
  return {
    type: 'addOrder',
    payload: order
  };
};

export const deleteOrder = (order) => {
  return {
    type: 'deleteOrder',
    payload: order
  };
};
