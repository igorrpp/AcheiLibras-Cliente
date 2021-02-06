import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';
import { Interprete } from '../model/interprete';
import { ClienteService } from '../services/cliente.service';
import { InterpreteService } from '../services/interprete.service';
import { TemplateService } from '../services/template.service';


@Component({
  selector: 'app-solicitacao-agendamento',
  templateUrl: './solicitacao-agendamento.page.html',
  styleUrls: ['./solicitacao-agendamento.page.scss'],
})
export class SolicitacaoAgendamentoPage implements OnInit {
  valor: string;
  formGroup: FormGroup;
  message: string = null;
  cliente: Cliente = new Cliente();
  interprete: Interprete = new Interprete();

  constructor(
    private route: ActivatedRoute,
    private clienteServ: ClienteService,
    private interpreteServ: InterpreteService,
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private formBuilder: FormBuilder,
    private template: TemplateService,

  ) {
    this.iniciarForm();
  }


  ngOnInit() {
    this.route.paramMap.subscribe(url => {

      let id = url.get('id');
      this.interpreteServ.buscaPorId(id).subscribe(data => {

        this.interprete = data.payload.data();

        //Id do cliente "clicado" em detalhe
        this.interprete.id = data.payload.id as string;
      
        
        console.log(this.interprete);
        this.auth.currentUser.then(response => {

          //Id do usuário logado
          this.interprete.idInterprete = response.uid

          this.iniciarForm();
        })

      })
    })


  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({

      
      horario: [''],
      dataAgendamento:  [''],
      obsAgendamento: [''],
      localAgendamento: [''],
      preco: [''],
     
      idLogado: [this.interprete.idInterprete],

      id: [this.interprete.id],
      nome: [this.interprete.nome],









    })



  }

  cadAgendamento() {


    this.auth.currentUser.then(response => {
      response.uid;
      console.log(response.uid);

      try {
         //Cadastra no Id Logado
         this.afs.collection('Cadastros_de_clientes').doc(response.uid).collection('RecusarOuSolicitar').doc(this.interprete.id).set(this.formGroup.value);


        //Cadastra no id do interprete
        this.afs.collection('Cadastros_de_interpretes').doc(this.interprete.id).collection('RecusarOuSolicitar').doc(response.uid).set(this.formGroup.value);
        console.log("Cadastro efetuado com sucesso!");

       
        this.template.myAlert("Agendado com sucesso!");
      } catch (error) {
        console.error(error);

      }
    }




    )
  }



}
