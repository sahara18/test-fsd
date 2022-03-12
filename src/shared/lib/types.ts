import {Action, AnyAction, Reducer} from 'redux';

export type FeatureReducer<
  EntityState = any,
  FeatureAction extends Action = AnyAction
> = (
  entityReducer: Reducer<EntityState>,
) => Reducer<EntityState, FeatureAction>;
