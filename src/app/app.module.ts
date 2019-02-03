import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiciosocialComponent } from './serviciosocial/serviciosocial.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { MensajeComponent } from './acercade/mensaje/mensaje.component';
import { HistoriaComponent } from './acercade/historia/historia.component';
import { DocentesComponent } from './acercade/docentes/docentes.component';
import { MisionvisionComponent } from './acercade/misionvision/misionvision.component';
import { ObjetivoComponent } from './acercade/objetivo/objetivo.component';
import { UbicacionComponent } from './acercade/ubicacion/ubicacion.component';
import { EfComponent } from './oferta/ef/ef.component';
import { EdComponent } from './oferta/ed/ed.component';
import { ProgramaComponent } from './oferta/programa/programa.component';
import { RequisitosComponent } from './oferta/requisitos/requisitos.component';


const routes: Routes= [

  {path: '', component: ServiciosocialComponent},
  {path: 'ss', component: ServiciosocialComponent},
  {path: 'licef', component: EfComponent},
  {path: 'liced', component: EdComponent},
  {path: 'programa', component: ProgramaComponent},
  {path: 'mensaje', component: MensajeComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'docentes', component: DocentesComponent},
  {path: 'MyV', component: MisionvisionComponent},
  {path: 'obj', component: ObjetivoComponent},
  {path: 'ubi', component: UbicacionComponent},
  {path: 'requisitos', component: RequisitosComponent},
  {path: 'Dir', component: DirectorioComponent},
  {path: '**', component: ServiciosocialComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    ServiciosocialComponent,
    DirectorioComponent,
    MensajeComponent,
    HistoriaComponent,
    DocentesComponent,
    MisionvisionComponent,
    ObjetivoComponent,
    UbicacionComponent,
    EfComponent,
    EdComponent,
    ProgramaComponent,
    RequisitosComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
