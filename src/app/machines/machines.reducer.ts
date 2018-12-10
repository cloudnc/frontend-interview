import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Machine } from './machine.interface';
import { MachinesActionsUnion } from './machines.actions';

export type MachinesState = EntityState<Machine>;

export const machinesAdapter: EntityAdapter<Machine> = createEntityAdapter<Machine>();

export const initialState: MachinesState = machinesAdapter.getInitialState();

export function machinesReducer(state: MachinesState = initialState, action: MachinesActionsUnion): MachinesState {
  switch (action.type) {
    // handle the actions you want to here

    default:
      return state;
  }
}
