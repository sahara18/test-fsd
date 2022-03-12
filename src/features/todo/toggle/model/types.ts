import {PayloadAction, PayloadActionCreator} from '@reduxjs/toolkit';
import {TODO_TOGGLE} from './constants';

export type TodoToggle = PayloadAction<string, typeof TODO_TOGGLE>;
export type TodoToggleAction = PayloadActionCreator<string, typeof TODO_TOGGLE>;

export type TodoToggleActions =
  | TodoToggle;
