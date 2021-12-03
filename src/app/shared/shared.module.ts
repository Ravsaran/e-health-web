import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MaterialCustomModule } from '../material-custom/material-custom.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MaterialCustomModule,
  ],
  exports: [
    NavigationComponent,
    MaterialCustomModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
