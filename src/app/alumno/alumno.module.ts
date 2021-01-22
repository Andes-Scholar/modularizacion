import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlumnoItemComponent } from './alumno-item/alumno-item.component';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';
import { AlumnoManagerComponent } from './alumno-manager/alumno-manager.component';
import { FilterBoxComponent } from '../filter-box/filter-box.component';
import { FormsModule } from '@angular/forms';
import { AlumnoEdicionComponent } from './alumno-edicion/alumno-edicion.component';

@NgModule({
  declarations: [AlumnoEdicionComponent, AlumnoManagerComponent, AlumnoListaComponent, AlumnoItemComponent, FilterBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'alumnos', component: AlumnoManagerComponent },
      { path: 'alumnos/:operacion/:id', component: AlumnoEdicionComponent },
      { path: 'alumnos/:operacion', component: AlumnoEdicionComponent },
    ]),
  ],
})
export class AlumnoModule {}
