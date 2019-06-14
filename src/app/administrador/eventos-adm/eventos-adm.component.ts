import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-eventos-adm',
  templateUrl: './eventos-adm.component.html',
  styleUrls: ['./eventos-adm.component.css']
})
export class EventosAdmComponent implements OnInit {
  eventoForm: FormGroup;
  constructor(private pf: FormBuilder) { }

  ngOnInit() {
    this.eventoForm = this.pf.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      //fechap: ['', Validators.required],
      fechae: ['', Validators.required],
    });
  }

  saveevento(){
    var f = new Date();
    const varsev = {
      titulo: this.eventoForm.get('titulo').value,
      descripcion: this.eventoForm.get('descripcion').value,
      fechap: (f.getFullYear()+ "-" + (f.getMonth()+1) + "-" + f.getDate() ),
      fechae: this.eventoForm.get('fechae').value,
    }
    return varsev;
  }

  agregar(){
    var event = this.saveevento();
    console.log(event);
    if(new Date(event.fechae).getTime() > new Date(event.fechap).getTime()){
      alert("se puede registrar")
    }
  }  
}
