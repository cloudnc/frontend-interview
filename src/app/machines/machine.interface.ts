import { uuid } from '../shared/interfaces/uuid.interface';

export enum MachineStatus {
  ON = 'on',
  OFF = 'off'
}

// when retrieving a machine from the REST endpoint (`/machines/:machineId`)
// you'll get an object of the following type
export interface Machine {
  id: uuid;
  name: string;
}

// when subscribing to the websocket and the event 'MACHINE_STATUS_CHANGES'
// you'll get events of the following type
export interface MachineStatusFromWebSocket {
  id: uuid;
  status: MachineStatus;
}
