import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpretesPageRoutingModule } from './interpretes-routing.module';

import { InterpretesPage } from './interpretes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpretesPageRoutingModule,
    
  
  ],
  declarations: [InterpretesPage]
})
export class InterpretesPageModule {}
