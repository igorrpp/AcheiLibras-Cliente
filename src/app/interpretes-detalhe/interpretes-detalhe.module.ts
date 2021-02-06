import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpretesDetalhePageRoutingModule } from './interpretes-detalhe-routing.module';

import { InterpretesDetalhePage } from './interpretes-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpretesDetalhePageRoutingModule
  ],
  declarations: [InterpretesDetalhePage]
})
export class InterpretesDetalhePageModule {}
