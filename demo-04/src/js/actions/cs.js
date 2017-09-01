import {
  increase,
  cutback
} from './actionsTypes'

export const increaseAction = { type: increase };
export const cutbackAction = { type: cutback};

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});