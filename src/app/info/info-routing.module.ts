import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LombaComponent } from './lomba/lomba.component';
import { PendaftaranComponent } from './pendaftaran/pendaftaran.component';

const routes: Routes = [
  {path: 'lomba', component: LombaComponent},
  {path: 'pendaftaran', component: PendaftaranComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
