import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpretesPage } from './interpretes.page';

const routes: Routes = [
  {
    path: '',
    component: InterpretesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpretesPageRoutingModule {}
