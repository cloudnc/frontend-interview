import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ng-socket-io';
import { MachineStatusFromWebSocket, Machine } from '../machines/machine.interface';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  public machine$: Observable<Machine>;

  public machinesStatusesChanges$: Observable<MachineStatusFromWebSocket[]> = this.socket
    .fromEvent<MachineStatusFromWebSocket>('MACHINE_STATUS_CHANGES')
    .pipe(
      scan<MachineStatusFromWebSocket, MachineStatusFromWebSocket[]>((statuses, status) => {
        statuses.push(status);
        return statuses;
      }, [])
    );

  constructor(private socket: Socket, private httpClient: HttpClient) {}

  ngOnInit() {}

  fetchExampleMachine(): void {
    this.machine$ = this.httpClient.get<Machine>(`http://localhost:3000/machines/machine-0`);
  }
}
