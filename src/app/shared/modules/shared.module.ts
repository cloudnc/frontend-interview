import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatCardModule,
  MatBadgeModule
} from '@angular/material';

// list of already provided material materialModules, feel free to add some!
const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatCardModule,
  MatBadgeModule
];

const sharedImportsExports = [CommonModule, RouterModule, ...materialModules];

@NgModule({
  imports: sharedImportsExports,
  exports: sharedImportsExports
})
export class SharedModule {}
