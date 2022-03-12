import {createAction} from '@reduxjs/toolkit';
import {TodoToggleAction} from './types';
import {TODO_TOGGLE} from './constants';

export const todoToggle: TodoToggleAction = createAction(TODO_TOGGLE);
