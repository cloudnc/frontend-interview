import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MachineStatus } from '../../interfaces/machine.interface';
import { MachineStatusComponent } from '../machine-status/machine-status.component';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MachineStatusComponent, MatCardModule],
})
export class MachineComponent {
  public MachineStatus = MachineStatus;
}
