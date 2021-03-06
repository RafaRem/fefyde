import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertaeducativaService {
  efisica: any = [{
    carrera: 'Licenciatura En Educación Física ',
    tipo: 'Escolarizada',
    obj: 'Formar profesionales de alto nivel con capacidad para el ejercicio de la cultura física; con gran espíritu humanista capaz de manejar los elementos que se involucran en el proceso enseñanza aprendizaje, así como la promoción, administración e integración de la educación física, el deporte y la recreación ',
    perfe : 'Intervenir en el diseño,  gestión y evaluación de políticas, planes y programas relacionados con las practicas corporales en las distintas  escalas y niveles del sistema educativo formal y del ámbito no formal, y/o asesorar, planificar, conducir y evaluar procesos de enseñanza y aprendizaje en el área de la cultura física en todos los niveles del sistema educativo nacional, en los diferentes regímenes (publico y privado) así como en otras áreas de tipo recreativo, deportivo, laboral, turísticos de la salud y el arte'+
    ' Programar, conducir y administrar servicios centrados en practicas corporales en instituciones públicas y privadas dedicadas a estas prestaciones y en empresas, clubes e instituciones comunitarias, y a la formación de deportistas con bases solidas para el alto rendimiento. '+
    'Diseñar, proyectar y desarrollar investigación básica en relación con la articulación de las practicas corporales en el campo de la educación física, la recreación, la salud, el deporte y el trabajo. '+
    ' Capacidad para el diseño e implementación de programas de recreación, de animación sociocultural, de vida en la naturaleza y el arte libre, asi como las practicas que están vinculadas al cuidado, desarrollo y mantenimiento de la aptitud física de las personas en las diferentes etapas de su vida.',
    perfi: [
      'Conocimientos generales.',
      'Adecuada expresión de lecto-escritura.',
      'Uso adecuado de nuevas tecnologías.',
      'Disponibilidad corporal para la actividad física.'],

  },]
  edep: any = [{
    carrera: 'Licenciatura En Educación Deportiva ',
    tipo: 'Semiescolarizada',
    obj: 'El Licenciado en Educación Deportiva, tendrá un alto nivel de conocimiento de la cultura física y el deporte con capacidad para impulsar y formar deportistas de alto nivel de competencia, que posean además, un gran espíritu humanista capaz de manejar elementos que se involucran en el proceso enseñanza-aprendizaje, así como la promoción, administración e instrumentación de la cultura física, el deporte y la recreación',
    perfe: 'El Licenciado en Educación Deportiva, tendrá un alto nivel de conocimiento de la cultura física y el deporte con capacidad para impulsar y formar deportistas de alto nivel de competencia, que posean además, un gran espíritu humanista capaz de manejar elementos que se involucran en el proceso enseñanza-aprendizaje, así como la promoción, administración e instrumentación de la cultura física, el deporte y la recreación. La gama de conocimientos, habilidades y destrezas que los alumnos de la carrera desarrollen, les permitirá identificarse en el proceso técnico administrativo del ámbito del deporte en general, donde se podrán desempeñarse como:',
    des: ['Entrenador',
      'Administrador Deportivo',
      'Coordinador Deportivo',
      'Metodólogo',
      'Director Técnico',
      'Preparador Físico']
  },]

  getCarreras(){
    return this.efisica;
  }
  constructor() {
    
   }
}
