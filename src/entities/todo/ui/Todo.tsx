import React from 'react';
import {Todo} from '../model/types';

interface Props {
  todo: Todo,
  onToggle: () => void,
}

export default function TodoView(props: Props): JSX.Element {
  const {
    todo,
    onToggle,
  } = props;

  return (
    <div style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
      <input
        type="checkbox"
        checked={Boolean(todo.completed)}
        onChange={onToggle}
      />

      {todo.name}
    </div>
  );
}
