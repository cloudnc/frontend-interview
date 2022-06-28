import { enableProdMode, importProvidersFrom } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './app/sandbox/sandbox.component';
import { MachinesComponent } from './app/machines/machines.component';
import { MachineComponent } from './app/machines/machine/machine.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  // 'machines/:id' is not defined as a children of 'machines' on purpose
  // please keep it that way
  { path: 'machines/:id', component: MachineComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'sandbox', component: SandboxComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/machines',
  },
];

const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {
    transports: ['websocket', 'polling'],
  },
};

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot({
        router: routerReducer,
        // if you use ngrx, register your reducer here
      }),
      // if you decide to use Effects from ngrx...
      EffectsModule.forRoot([
        // ...list them here
      ]),
      StoreRouterConnectingModule.forRoot(),
      RouterModule.forRoot(routes),
      SocketIoModule.forRoot(config),
      HttpClientModule,

      !environment.production ? StoreDevtoolsModule.instrument() : []
    ),
  ],
}).catch((err) => console.error(err));
