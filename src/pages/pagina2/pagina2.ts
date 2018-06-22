import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl:AlertController, private loadingCtrl:LoadingController) {
  }

  

  ir_pagina3(){
    this.navCtrl.push("mi-pagina3");
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");

    let promesa = new Promise((resolve,reject)=>{

      let confirm = this.alertCtrl.create({
        title: 'Ir a página 2',
        message: 'Está seguro de ir a la página 2?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'Ok',
            handler: () => resolve(true)
          }
        ]
      });
      confirm.present();
      
    });

    return promesa;
    // let numero = Math.round(Math.random() * 10);
    // console.log(numero);

    // if(numero >=3 ){
    //   return true;
    // }else{
    //   return false;
    // }
  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave");

    console.log("Espere 2 segundos para salir");

    let loading = this.loadingCtrl.create({
      content:"Espere por favor ..."
    });

    loading.present();

    let promesa = new Promise( (resolve,reject)=>{
      
      setTimeout(() => {
        loading.dismiss();
        resolve(true)
      }, 2000);

    })

    return promesa;
    
  }

  confirmar() {
    
  }
}
