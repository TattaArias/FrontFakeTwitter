import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My application Poli-CCT';
  he = 'Julian Andres Vargas Guerrero';
  she = 'Yuli Tatiana Cañon Añias';
  num1 = 3 ;
  num2 = 2 ;
  resultadoSumar: number ;

  constructor(){
    console.log("Constructor Create" );
  }
  sumar () {
    this.resultadoSumar = this.num1 + this.num2 ;
  }



}
