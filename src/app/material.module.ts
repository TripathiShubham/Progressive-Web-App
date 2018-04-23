import { NgModule } from '@angular/core';

import {
  MatDatepickerModule, MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatDatepickerModule, MatFormFieldModule
  ],
  exports: [
    MatDatepickerModule, MatFormFieldModule
  ]
})
export declare class MaterialModule {}
