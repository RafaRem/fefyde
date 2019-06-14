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

irubicacion(){
  window.open("https://www.google.com/maps/place/Torre+Academica+UAS/@25.8140437,-108.9831446,17z/data=!3m1!4b1!4m5!3m4!1s0x86ba28ba09a1ee77:0xdc7aa10501b7298d!8m2!3d25.8140437!4d-108.9809559");
}

irfacebook(){
  window.open("https://web.facebook.com/fefydeextmochis/?epa=SEARCH_BOX");
}
ConsultaCalificacion(){
  window.open("http://dse.uasnet.mx/alumnos/");
  
}


}
