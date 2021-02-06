import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-clientes-perfil-detalhe',
  templateUrl: './clientes-perfil-detalhe.page.html',
  styleUrls: ['./clientes-perfil-detalhe.page.scss'],
})
export class ClientesPerfilDetalhePage implements OnInit {

  id: any = '';
  imagem: any = null;
  cliente: Cliente = new Cliente();
  formGroup: FormGroup;



  constructor(
    private route: ActivatedRoute,
    private clienteServ: ClienteService,
    private fireStorage: AngularFireStorage,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private auth: AngularFireAuth,


  ) {
    this.iniciarForm();
    this.auth.currentUser.then(response => {
      this.clienteServ.buscaPerfilPorId(response.uid).subscribe(response => {
        this.cliente = response;
        this.iniciarForm();
        this.downloadImage();
      })
    })
  }


  ngOnInit() {


  }
  downloadImage() {
    // código para receber o id do usuário logado
    this.auth.currentUser.then(response => {


      let ref = this.fireStorage.storage.ref().child(`/clientes-foto/${response.uid}.jpg`)
      ref.getDownloadURL().then(url => {
        this.imagem = url;


      }, err => {
        this.imagem =
          'assets/img/user.png';
      })
    })
  }

  atualizar(uid) {
    this.auth.currentUser.then(response => {
      this.navCtrl.navigateForward(['/clientes-update/', response.uid]);
    })


  }
  foto() {
    this.navCtrl.navigateForward(['/clientes-perfil-foto', this.cliente.id]);
  }

  /* função para excluir "Perfil do usuário" tanto no Auth quando na colleção
  excluir2(id: string) {

    var user = firebase.auth().currentUser;

    user.delete().then(function () {
      this.interpreteServ.excluir(this.interprete.id).subscribe(data => {
        this.navCtrl.navigateRoot('login');
      })
    }).catch(function (error) {
      console.log(`Erro ao cadastrar ${error}`);

    });
  }
*/

  iniciarForm() {

    this.formGroup = this.formBuilder.group({

      status: [this.cliente.status],
      username: [this.cliente.username],
      nome: [this.cliente.nome],
      cpf: [this.cliente.cpf],
      cep: [this.cliente.cep],
      telefone: [this.cliente.telefone],
      cidade: [this.cliente.cidade],
      estado: [this.cliente.estado],
      deficiencia: [this.cliente.deficiencia]
    })
  }
  atualizar2() {

    this.auth.currentUser.then(response => { // auth.currentUser -> Obten dados do usuario
      // envio uid -> idUsuário
      // this.formGroup.value -> Dados preenchidos nos campos
      this.clienteServ.atualizaPerfil(response.uid, this.formGroup.value).subscribe(response => {
        console.log(response);
        console.log(this.formGroup.value)
      })
      if (document.getElementById("demo").innerHTML == 'Online') {
        document.getElementById("demo").style.color= "Blue";
  
      }else if (document.getElementById("demo").innerHTML == 'Offline') {
        document.getElementById("demo").style.color = "#ff0000"
  
      } else {
        (document.getElementById("demo").style.color = "yellow")
      }
    
      
    })

    
    
}

}


