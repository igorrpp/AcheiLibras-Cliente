import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';
import { Interprete } from '../model/interprete';
import { InterpreteService } from '../services/interprete.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-interpretes',
  templateUrl: './interpretes.page.html',
  styleUrls: ['./interpretes.page.scss'],
})
export class InterpretesPage implements OnInit {
  //Views
  @ViewChild("nome") nome;
  @ViewChild("estado") estado;

  // Variaveis
  select_option: string;
  imagem: any = null;
  interpretes: Interprete[] = [];
  interprete: Interprete = new Interprete();
  codImage: any = '';


  constructor(
    private interpreteServ: InterpreteService,
    private template: TemplateService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,) {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.interpretes = [];


    this.template.loading.then(load => {
      load.present();

      this.interpreteServ.listar().subscribe(data => {
        console.log(this.codImage);

        data.map(i => {

          let interprete: Interprete = i.payload.doc.data() as Interprete;
         interprete.id = i.payload.doc.id as string;

          let ref = this.fireStorage.storage.ref().child(`/interpretes-foto/${i.payload.doc.id}.jpg`)
          ref.getDownloadURL().then(url => {

           
          
            interprete.imagem = url;

          }, err => {
            interprete.imagem = 'assets/img/user.png';
          })


            this.interpretes.push(interprete);
        
        })
        load.dismiss();



      })
    })

  };

  downloadImage() {

    let ref = this.fireStorage.storage.ref().child(`/interpretes-foto/${this.codImage}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
      console.log(this.imagem);
      console.log(this.imagem);


    }, err => {
      this.imagem =
        'assets/img/user.png';

    })
  }



  detalhe(obj: Interprete) {
    this.navCtrl.navigateForward(['/interpretes-detalhe/', obj.id]);
  }

  pesquisar() {
    console.log("Busca por: " + this.nome.value)
    this.interpreteServ.buscaPorNome(this.nome.value).subscribe(response => {
     
      if( this.nome.value == ''){
        this.ionViewWillEnter();
        
      }else{
       this.interpretes = [];
      this.interpretes = response;
        
      }


    });

  }

  pesquisarEstado() {
    console.log("Busca por: " + this.select_option)
    this.interpreteServ.buscaPorEstado(this.select_option).subscribe(response => {
      
      
      if( this.select_option == '0'){
        this.ionViewWillEnter();
        
      }else{
       this.interpretes = [];
      this.interpretes = response;
        
      }


    });
  }

}
