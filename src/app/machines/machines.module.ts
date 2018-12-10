import { NgModule } from '@angular/core';
import { MachinesComponent } from './machines.component';
import { MachineComponent } from './machine/machine.component';
import { SharedModule } from '../shared/modules/shared.module';
import { MachineStatusComponent } from './machine-status/machine-status.component';

@NgModule({
  imports: [SharedModule],
  declarations: [MachinesComponent, MachineComponent, MachineStatusComponent],
  exports: [MachinesComponent, MachineStatusComponent],
  providers: []
})
export class MachinesModule {}
