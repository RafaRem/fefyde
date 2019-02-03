import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fefyde';
  text =''
 public ss(){
  this.text = 'Facebook'
 }

 ConsultaCalificacion(){
    window.open("http://dse.uasnet.mx/alumnos/");
}
}
