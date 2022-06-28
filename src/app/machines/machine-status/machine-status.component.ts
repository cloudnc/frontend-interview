import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineStatus } from '../../../interfaces/machine.interface';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-machine-status',
  templateUrl: './machine-status.component.html',
  styleUrls: ['./machine-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class MachineStatusComponent {
  @Input()
  status!: MachineStatus;
}
