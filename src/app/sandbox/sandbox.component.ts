import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Socket } from 'ngx-socket-io';
import { Observable, scan, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Machine, MachineStatusFromWebSocket } from '../interfaces/machine.interface';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatButtonModule],
})
export class SandboxComponent {
  private socket = inject(Socket);
  private httpClient = inject(HttpClient);

  public fetchMachineBtnClicked$$ = new Subject<void>();

  public machine$: Observable<Machine> = this.fetchMachineBtnClicked$$.pipe(
    switchMap(() => this.httpClient.get<Machine>(`http://localhost:3000/machines/machine-0`)),
  );

  public machinesStatusesChanges$: Observable<MachineStatusFromWebSocket[]> = this.socket
    .fromEvent<MachineStatusFromWebSocket, 'MACHINE_STATUS_CHANGES'>('MACHINE_STATUS_CHANGES')
    .pipe(scan((statuses, status) => [...statuses, status], [] as MachineStatusFromWebSocket[]));
}
