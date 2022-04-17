import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoView from 'entities/todo/ui/Todo';
import TodoAddForm from 'features/todo/add/ui/Form';
import {getTodos} from 'entities/todo/model/selectors';
import {todoToggle} from 'features/todo/toggle/model/actions';

export default function TodosList(): JSX.Element {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  return (
    <>
      <h4>Todos</h4>
      <TodoAddForm />
      {todos.map((todo) => (
        <TodoView
          key={todo.name}
          todo={todo}
          onToggle={() => {
            dispatch(todoToggle(todo.id));
          }}
        />
      ))}
    </>
  );
}
