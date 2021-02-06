import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, validateEventsArray } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.page.html',
  styleUrls: ['./cadastrar-cliente.page.scss'],
})
export class CadastrarClientePage implements OnInit {

  formGroup: FormGroup;

  message: string = null;

  constructor(private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private template: TemplateService,
    private afs: AngularFirestore,


  ) {
    this.iniciarForm();
  }

  ngOnInit() {
  }
  iniciarForm() {
    this.formGroup = this.formBuilder.group({
     
      username: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
      nome: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(32)]],
      grupo: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
      deficiencia: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      telefone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      cidade: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
      estado: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],

    })
  }

  // Para cadastrar login junto com informações na coleção Cadastros_de_clientes
  async cadastrarUsers() {

    let user = this.formGroup.controls['username'].value;
    let pass = this.formGroup.controls['password'].value;

    try {

      const newUser = await this.auth.createUserWithEmailAndPassword(user, pass);
    
      /* Serve para criar uma senha e login, pegar o id do fire base o "uid" e salvar todos os valores do formGroup 
      na coleção "cadastro de clientes"*/
      await this.afs.collection('Cadastros_de_clientes').doc(newUser.user.uid).set(this.formGroup.value).then(() => {
        this.message = "Informações cadastradas com sucesso!";
        this.formGroup.reset();
      }).catch(() => {
        this.message = "Erro ao cadastrar as Informações!";
      })
      this.template.myAlert("Cadastro efetuado com sucesso!");
     
  
    } catch (error) {
      if(error === "auth/email-already-in-use"){
        console.log(`email já esta em uso ${error}`);
        
      }else{
        console.log(`O erro é ${error}`);
        
      }

    }

  }
  autenticar() {

    let user = this.formGroup.controls['username'].value;
    let pass = this.formGroup.controls['password'].value;


    this.template.loading.then(load => {

      load.present();


      this.auth.signInWithEmailAndPassword(user, pass).then(data => {

        load.dismiss();

        this.menuCtrl.enable(true);
        this.navCtrl.navigateRoot(['itensvencidos']);

      }).catch(data => {
        load.dismiss();
        this.template.myAlert("Usuário ou senha inválidos");

      });
    })

  }



}

