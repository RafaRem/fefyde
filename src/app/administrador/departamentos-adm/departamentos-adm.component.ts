import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-departamentos-adm',
  templateUrl: './departamentos-adm.component.html',
  styleUrls: ['./departamentos-adm.component.css']
})
export class DepartamentosAdmComponent implements OnInit {
  firebd;
  dep:any=[
    {departamento:'',
    encargado:'',
    correo:'',
    titulo:'',
    }
    ];
    file;
    correo;
    storage;
    imagen: any;
  depForm: FormGroup;

  constructor(private conect:ConexionService, private pf: FormBuilder) {
    this.firebd = this.conect.db; 
    this.storage = this.conect.storage;
   }

  ngOnInit() {
    
    this.depForm = this.pf.group({
      departamento: ['', Validators.required],
      encargado: ['', Validators.required],
      correo: ['', Validators.required],
      titulo: ['', Validators.required],
    });
  }

SelectFile(event) {
    this.file = <File>event.target.files[0];
    if (this.file) {
      const storageref = this.conect.storage.ref();
      console.log(this.file)
      const metadata = {
        contentType: this.file.type
      };
      const self = this;
      const f = new Date();
      storageref.child("FEFyDE"+"/" + f.getSeconds().toString() + f.getMinutes().toString() + f.getHours().toString()
      + f.getDate().toString() + f.getMonth().toString() + f.getFullYear().toString() + "/"+self.file.name)
      .put(this.file, metadata)
      .catch(function (err) {console.log("Error al subir, " + err)})
      .then(function(snap) {
        console.log(snap.downloadURL);
        const documento = {
          URL: snap.downloadURL,
          nombre: self.file.name
        };
        self.imagen = documento.URL;
        
        self.insert('FEFyDE', documento,
          function(res) {  },
          function(res) { console.log(res); 
        });
      });
    }
  }

  insert(coleccion: string, objeto: any, entonces, cachar) {
    console.log(objeto)
      this.firebd.collection(coleccion).doc("SS").set(objeto)
      .then(function(docRef) {
        alert("imagen cambiada correctamente")
          console.log('Document written with ID: ', docRef.id);
          entonces(docRef);
          
        }
      )
      .catch(function(error) {
          console.error('Error adding document: ', error);
          cachar(error);
        }
      );
  }
}
