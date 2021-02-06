import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { User } from '../services/chat.service';
import { ClienteService } from '../services/cliente.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.page.html',
  styleUrls: ['./clientes-update.page.scss'],
})
export class ClientesUpdatePage implements OnInit {

  formGroup: FormGroup;
  cliente: Cliente = new Cliente();
  user: string = '';

  constructor(private formBuilder: FormBuilder,
    private ClienteServ: ClienteService,
    private template: TemplateService,
    private navCtrl: NavController,


    private route: ActivatedRoute,
  ) {
    this.iniciarForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.ClienteServ.buscaPorId(id).subscribe(data => {
        this.cliente = data.payload.data();
        this.cliente.id = data.payload.id as string;
        this.iniciarForm();
      })
    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({

      username: [this.cliente.username, [Validators.email]],
      nome: [this.cliente.nome, [Validators.required, Validators.minLength(13), Validators.maxLength(32)]],
      deficiencia: [this.cliente.deficiencia, [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
      cpf: [this.cliente.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      telefone: [this.cliente.telefone, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      cep: [this.cliente.cep, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      cidade: [this.cliente.cidade, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
      estado: [this.cliente.estado, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
      status: [this.cliente.status, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],


    })
  }

  atualizar() {
    this.template.loading.then(load => {
      load.present();
      this.ClienteServ.atualizar(this.cliente.id, this.formGroup.value).subscribe(data => {
        console.log(data);

        this.template.myAlert('Atualizado com sucesso');
        
      
        this.navCtrl.navigateForward(['/clientes-perfil-detalhe']);
        load.dismiss();

      })
    }

    )
  }

}