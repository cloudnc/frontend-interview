import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MachineStatus } from '../../../interfaces/machine.interface';
import { MachineStatusComponent } from '../machine-status/machine-status.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MachineStatusComponent, MatCardModule],
})
export class MachineComponent {
  public MachineStatus = MachineStatus;
}
