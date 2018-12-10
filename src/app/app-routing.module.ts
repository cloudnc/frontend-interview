import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachinesComponent } from './machines/machines.component';
import { MachineComponent } from './machines/machine/machine.component';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
  // 'machines/:id' is not defined as a children of 'machines' on purpose
  // please keep it that way
  { path: 'machines/:id', component: MachineComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'sandbox', component: SandboxComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/machines'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
