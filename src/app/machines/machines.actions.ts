import { Action } from '@ngrx/store';

// here's an example of an action that you can reuse to avoid too much boilerplate
export const EXAMPLE_ACTION_1 = '[Machines] EXAMPLE_ACTION_1';
export class ExampleAction1 implements Action {
  readonly type = EXAMPLE_ACTION_1;

  constructor(public payload: undefined) {}
}

export const EXAMPLE_ACTION_2 = '[Machines] EXAMPLE_ACTION_2';
export class ExampleAction2 implements Action {
  readonly type = EXAMPLE_ACTION_2;

  constructor(public payload: undefined) {}
}

export type MachinesActionsUnion = ExampleAction1 | ExampleAction2;
