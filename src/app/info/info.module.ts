import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { LombaComponent } from './lomba/lomba.component';
import { PendaftaranComponent } from './pendaftaran/pendaftaran.component';


@NgModule({
  declarations: [LombaComponent, PendaftaranComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
