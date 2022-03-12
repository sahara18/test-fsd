import {PayloadAction, PayloadActionCreator} from '@reduxjs/toolkit';
import {TODO_ADD} from './constants';

export type TodoAdd = PayloadAction<string, typeof TODO_ADD>;
export type TodoAddAction = PayloadActionCreator<string, typeof TODO_ADD>;

export type TodoAddActions =
  | TodoAdd;
