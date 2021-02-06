import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { Interprete } from '../model/interprete';
import { ClienteService } from '../services/cliente.service';
import { InterpreteService } from '../services/interprete.service';
import { TemplateService } from '../services/template.service';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  lista: Cliente[] = [];
  interprete: Interprete = new Interprete();

  constructor(
    private clienteServ: ClienteService,
    private template: TemplateService,
    private navCtrl: NavController,
    private fb: FirebaseApp,
    private auth: AngularFireAuth

  ) { }

  ngOnInit() {

   /* this.auth.onAuthStateChanged(function(user){
      if(user){
        console.log(user);
        console.log(user);
        console.log(user);
        
      } else {

      }
    })
*/

var user = this.fb.auth().currentUser;
var uid;

if (user != null) {
  this.cliente.id = user.uid;

  
  
  
} else {
  console.log('Deu ruim!!');
  
}
  }

  ionViewWillEnter() {
    this.clientes = [];


    this.template.loading.then(load => {
      load.present();
      this.clienteServ.listar2(this.cliente.id).subscribe(data => {
        data.map(i => {
          let cliente: Cliente = i.payload.doc.data() as Cliente;
          cliente.id = i.payload.doc.id as string;
          console.log(cliente.id);



          this.clientes.push(cliente);
        })
      })

      load.dismiss();

    })





  };




  detalhe(obj: Interprete) {
    this.navCtrl.navigateForward(['/interpretes-detalhe/', obj.id]);
  }




}
