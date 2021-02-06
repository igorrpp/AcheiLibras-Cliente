import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPerfilFotoPageRoutingModule } from './clientes-perfil-foto-routing.module';

import { ClientesPerfilFotoPage } from './clientes-perfil-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPerfilFotoPageRoutingModule
  ],
  declarations: [ClientesPerfilFotoPage]
})
export class ClientesPerfilFotoPageModule {}
