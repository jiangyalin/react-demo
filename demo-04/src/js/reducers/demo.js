let init = {
  text: 1
};

const demo = ( state = init, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        text: state.text+1
      };
    default:
      return state
  }
};

export default demo;