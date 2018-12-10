import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { SandboxComponent } from './sandbox.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SandboxComponent],
  exports: [SandboxComponent]
})
export class SandboxModule {}
