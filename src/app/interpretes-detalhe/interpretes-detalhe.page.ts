import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { Cliente } from '../model/cliente';
import { Interprete } from '../model/interprete';
import { InterpreteService } from '../services/interprete.service';

@Component({
  selector: 'app-interpretes-detalhe',
  templateUrl: './interpretes-detalhe.page.html',
  styleUrls: ['./interpretes-detalhe.page.scss'],
})
export class InterpretesDetalhePage implements OnInit {

  imagem: any = null;
  interprete: Interprete = new Interprete();
  cliente: Cliente = new Cliente();
  codigopais: string = "55";

  //SUBSTITUIR ESTE Nº PELO Nº CADASTRADO NO ID
  whatsappnumber: string = "";
  mensagem: string = "?text=Olá, te encontrei no App Achei Libras";
  
  constructor(
    private route: ActivatedRoute,
    private interpreteServ : InterpreteService,
    private fireStorage: AngularFireStorage,
    private navCtrl: NavController,
    private auth: AngularFireAuth
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.interpreteServ.buscaPorId(id).subscribe(data => {
        this.interprete = data.payload.data();
        this.interprete.id = data.payload.id as string;
        console.log(this.interprete);
       this.downloadImage();
      })
    })
    
  }

downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`/interpretes-foto/${this.interprete.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem =
       'assets/img/user.png';
    })
  }

  detalhe(){
   
    this.navCtrl.navigateForward(['/solicitacao-agendamento/', this.interprete.id]);
  }

  zap(url) {
    this.whatsappnumber = this.interprete.telefone;
    return url = "https://wa.me/" + this.codigopais + this.whatsappnumber + this.mensagem;
  }

  agendarRed(){
  
    this.navCtrl.navigateForward(['/solicitacao-agendamento/']);
  }
  
  

}
