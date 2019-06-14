import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-noticias-adm',
  templateUrl: './noticias-adm.component.html',
  styleUrls: ['./noticias-adm.component.css']
})
export class NoticiasAdmComponent implements OnInit {
  noticiaForm: FormGroup;
  constructor(private pf: FormBuilder) { }

  ngOnInit() {
    this.noticiaForm = this.pf.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      //fechap: ['', Validators.required],
      //fechae: ['', Validators.required],
    });
  }

  saveevento(){
    var f = new Date();
    const varsev = {
      titulo: this.noticiaForm.get('titulo').value,
      descripcion: this.noticiaForm.get('descripcion').value,
      fechap: (f.getFullYear()+ "-" + (f.getMonth()+1) + "-" + f.getDate() ),
      
    }
    return varsev;
  }

  agregar(){
    var noti = this.saveevento();
    console.log(noti);
  }  

}
