import {createStore, combineReducers, compose, Reducer} from 'redux';
import todosReducer from 'entities/todo/model/reducer';
import {TodosState} from 'entities/todo/model/types';
import withTodoToggle from 'features/todo/toggle/model/reducer';
import withAddTodo from 'features/todo/add/model/reducer';

const todos = compose<Reducer<TodosState>>(
  withTodoToggle,
  withAddTodo,
)(todosReducer);

const reducer = combineReducers({
  todos,
});

export default createStore(reducer);
