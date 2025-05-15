import { Routes } from '@angular/router';
import { MachineComponent } from './machines/machine/machine.component';
import { MachinesComponent } from './machines/machines.component';
import { SandboxComponent } from './sandbox/sandbox.component';

export const routes: Routes = [
  // 'machines/:id' is not defined as a children of 'machines' on purpose
  // please keep it that way
  { path: 'machines/:id', component: MachineComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'sandbox', component: SandboxComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/machines',
  },
];
