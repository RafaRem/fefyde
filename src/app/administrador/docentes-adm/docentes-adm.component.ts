import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-docentes-adm',
  templateUrl: './docentes-adm.component.html',
  styleUrls: ['./docentes-adm.component.css']
})
export class DocentesAdmComponent implements OnInit {
  firebd: any;
  doc:any=[
    {titulo:'',
    nombre:'',
    correo:'',
    mat:[],
    }
    ];
  docForm: FormGroup;
    constructor(private conect:ConexionService, private pf: FormBuilder) {
    this.firebd = this.conect.getstore(); 
   }


  insert(){
    //his.firebd.collection("Facultad").doc(this.est.facultad).collection("universidad").doc(this.est.universidad).collection("carrera").doc(this.est.carrera).collection("plan").doc(this.planE).collection("calificacion").doc(this.est.matricula).set({
      this.firebd.collection("fefyde").doc("Docentes").set({
      titulo: this.doc.titulo,
      nombre: this.doc.nombre, 
      correo: this.doc.correo,
      matrias: this.doc.mat
  }).then(function(docRef:any) {
    console.log("Document written with ID: ", docRef);
  }).catch(function(error:any) {
    console.error("Error adding document: ", error);
  });
}

savedoc(){

  const varsev = {
    titulo: this.docForm.get('titulo').value,
    nombre: this.docForm.get('nombre').value,
    correo: this.docForm.get('correo').value,
    materias: "hola",
  }
  return varsev;
}
  ngOnInit() {
    this.docForm = this.pf.group({
      titulo: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
    });
  }

  agregar(){
    var event = this.savedoc();
    console.log(event)
  }
  


}
