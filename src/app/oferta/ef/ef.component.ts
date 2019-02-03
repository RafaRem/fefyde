import { Component, OnInit } from '@angular/core';
import { OfertaeducativaService} from '../../servicios/ofertaeducativa.service'

@Component({
  selector: 'app-ef',
  templateUrl: './ef.component.html',
  styleUrls: ['./ef.component.css']
})
export class EfComponent implements OnInit {

  carreras : any;
  titulo;
  constructor(private servicio: OfertaeducativaService) {
    this.carreras = servicio.getCarreras();
    console.log(this.carreras)
    this.titulo = this.carreras.tipo;
   }

  ngOnInit() {
  }

}
