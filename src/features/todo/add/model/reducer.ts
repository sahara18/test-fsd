import {v4 as uuid} from 'uuid';
import {FeatureReducer} from 'shared/lib/types';
import {TodosState} from 'entities/todo/model/types';
import {todosInitialState} from 'entities/todo/model/reducer';
import {TodoAddActions} from './types';
import {todoAdd} from './actions';

const withAddTodo: FeatureReducer<TodosState, TodoAddActions> = (entityReducer) => (
  (state = todosInitialState, action) => {
    switch (action.type) {
      case todoAdd.type:
        return {
          todos: state.todos.concat({
            id: uuid(),
            name: action.payload,
          }),
        };

      default:
        return entityReducer(state, action);
    }
  }
);

export default withAddTodo;
