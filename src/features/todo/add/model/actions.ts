import {createAction} from '@reduxjs/toolkit';
import {TodoAddAction} from './types';
import {TODO_ADD} from './constants';

export const todoAdd: TodoAddAction = createAction(TODO_ADD);
