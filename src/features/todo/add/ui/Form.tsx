import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {todoAdd} from '../model/actions';
import {TodoAddValues} from './types';

export default function Form(): JSX.Element {
  const dispatch = useDispatch();
  const [values, setValues] = useState<TodoAddValues>({
    text: '',
  });

  return (
    <input
      type="text"
      placeholder="New todo"
      value={values.text}
      onChange={(e) => {
        setValues({
          text: e.target.value,
        });
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          dispatch(todoAdd(values.text));
          setValues({
            text: '',
          });
        }
      }}
    />
  );
}
