import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MachineStatusComponent } from './machine-status/machine-status.component';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MachineStatus } from '../../interfaces/machine.interface';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, MachineStatusComponent, MatListModule, MatBadgeModule, MatButtonModule],
})
export class MachinesComponent implements OnInit {
  public MachineStatus = MachineStatus;

  constructor() {}

  ngOnInit(): void {}
}
