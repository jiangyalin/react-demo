let init = {
  text: '这是测试数据'
};

const demo = ( state = init, action ) => {
  switch (action.type) {
    case 'DEMO_ADD':
      return {
        ...state,
        text: 'aaa'
      };
    default:
      return state
  }
};

export default demo;