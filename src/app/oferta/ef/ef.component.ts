import { Component, OnInit } from '@angular/core';
import { OfertaeducativaService} from '../../servicios/ofertaeducativa.service'

@Component({
  selector: 'app-ef',
  templateUrl: './ef.component.html',
  styleUrls: ['./ef.component.css']
})
export class EfComponent implements OnInit {

  efisica : any;
  titulo;
  constructor(private servicio: OfertaeducativaService) {
    this.efisica = servicio.getCarreras();
    console.log(this.efisica)
    this.titulo = this.efisica.tipo;
   }

  ngOnInit() {
  }

}
