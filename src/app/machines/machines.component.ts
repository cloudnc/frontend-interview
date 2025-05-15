import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MachineStatus } from '../interfaces/machine.interface';
import { MachineStatusComponent } from './machine-status/machine-status.component';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, MachineStatusComponent, MatListModule, MatBadgeModule, MatButtonModule],
})
export class MachinesComponent {
  public MachineStatus = MachineStatus;
}
