import { Component, Input, OnInit } from '@angular/core';
import { MachineStatus } from '../machine.interface';

@Component({
  selector: 'app-machine-status',
  templateUrl: './machine-status.component.html',
  styleUrls: ['./machine-status.component.scss']
})
export class MachineStatusComponent implements OnInit {
  @Input()
  status: MachineStatus;

  public ngOnInit(): void {}
}
