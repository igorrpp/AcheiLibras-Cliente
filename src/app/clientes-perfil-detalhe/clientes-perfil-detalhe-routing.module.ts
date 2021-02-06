import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPerfilDetalhePage } from './clientes-perfil-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPerfilDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPerfilDetalhePageRoutingModule {}
