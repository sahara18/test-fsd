import {FeatureReducer} from 'shared/lib/types';
import {TodosState} from 'entities/todo/model/types';
import {todosInitialState} from 'entities/todo/model/reducer';
import {TodoToggleActions} from './types';
import {todoToggle} from './actions';

const withToggleTodo: FeatureReducer<TodosState, TodoToggleActions> = (entityReducer) => (
  (state = todosInitialState, action) => {
    switch (action.type) {
      case todoToggle.type: {
        // just example
        const todos = [...state.todos];
        const todo = todos.find((todo) => todo.id === action.payload);
        if (todo) todo.completed = !todo.completed;
        return {todos};
      }

      default:
        return entityReducer(state, action);
    }
  }
);

export default withToggleTodo;
