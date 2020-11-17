import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LombaComponent } from './lomba/lomba.component';

const routes: Routes = [
  {path: 'lomba', component: LombaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
