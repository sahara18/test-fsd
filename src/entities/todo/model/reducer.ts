import {Reducer} from 'redux';
import {v4 as uuid} from 'uuid';
import {TodosState} from './types';

export const todosInitialState: TodosState = {
  todos: [
    {id: uuid(), name: 'Eat', completed: true},
    {id: uuid(), name: 'Sleep', completed: true},
    {id: uuid(), name: 'Learn FSD'},
  ],
};

const reducer: Reducer<TodosState> = (state = todosInitialState) => state;

export default reducer;
