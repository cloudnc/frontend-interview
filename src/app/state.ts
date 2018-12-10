import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { MachinesState, machinesReducer } from './machines/machines.reducer';

export interface State {
  router: RouterReducerState;

  // provide the type(s) of your different(s) reducer(s) here

  // we're providing the `machines` part here and also some files
  // (the reducer, actions, effect, service) to save you writing some boilerplate
  // if you come up with a different design, feel free not to use it!
  machines: MachinesState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,

  // provide your different(s) reducer(s) here

  // we're providing the `machines` part here and also some files
  // (the reducer, actions, effect, service) to save you writing some boilerplate
  // if you come up with a different design, feel free not to use it!
  machines: machinesReducer
};
