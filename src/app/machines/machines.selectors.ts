import { machinesAdapter, MachinesState } from './machines.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const selectMachinesState = createFeatureSelector<MachinesState>('machines');

const { selectIds, selectEntities, selectAll, selectTotal } = machinesAdapter.getSelectors();
