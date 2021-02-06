import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPerfilFotoPage } from './clientes-perfil-foto.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPerfilFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPerfilFotoPageRoutingModule {}
