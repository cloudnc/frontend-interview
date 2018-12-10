import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

export const getRouterState = createFeatureSelector<RouterReducerState<any>>('router');
