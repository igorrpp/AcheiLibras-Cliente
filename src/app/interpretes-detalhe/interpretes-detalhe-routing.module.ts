import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpretesDetalhePage } from './interpretes-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: InterpretesDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpretesDetalhePageRoutingModule {}
