const todos = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case 'cutback':
      return { count: count - 1 };
    default:
      return state
  }
};

export default todos;