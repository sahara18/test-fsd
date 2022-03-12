import {Selector} from 'react-redux';
import {Todo} from './types';

export const getTodos: Selector<RootState, Todo[]> = (state) => state.todos.todos;
