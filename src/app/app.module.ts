import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MachinesModule } from './machines/machines.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/modules/shared.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SandboxModule } from './sandbox/sandbox.module';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    // basic setup, you shouldn't have to modify that part
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    MachinesModule,
    SandboxModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    // if you decide to use Effects from Ngrx...
    EffectsModule.forRoot([
      // ...list them here
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
