
import { Component, AfterViewInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
 
@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {

  message: string = null;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;
  
  event = {
    title: '',
    desc: '',
    agendado: null,
    endTime: '',
    allDay: true

  };
 
  modalReady = false;

  // 1. Model para Calendario
  // 2. Calendario Service
  // 3. Injetar o CalendarioService
  constructor(
    private modalCtrl: ModalController,
    private afs: AngularFirestore,
    private auth: AngularFireAuth) { }
 
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;      
    }, 0);
  }

  
  save() {
     // Realizar o cadastro
     console.log(`Esse é o titulo ${this.event.title}`);
     console.log(`Esse é o hora: ${this.event.agendado}`);
     console.log(`Esse é o descrição: ${this.event.desc}`);
 
     // variavel "user" para capturar dados do usuario logado, e depois para salvar dados na coleção
 
    this.auth.currentUser.then(response=>{
       
     this.afs.collection('calendario').doc(response.uid).set(this.event).then(() => {
 
       this.message = "Informações cadastradas com sucesso!";
 
     }).catch(() => {
       this.message = "Erro ao cadastrar as Informações!";
     })
 
    this.modalCtrl.dismiss({event: this.event})
  })
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 /*
  onTimeSelected(ev) {    
    this.event.startTime = new Date(ev.selectedTime);
  }
  */
  onTimeSelected() {    
    this.event.agendado = new Date();
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
}