import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlumnoItemComponent } from './alumno-item/alumno-item.component';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';
import { AlumnoManagerComponent } from './alumno-manager/alumno-manager.component';
import { FormsModule } from '@angular/forms';
import { AlumnoEdicionComponent } from './alumno-edicion/alumno-edicion.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatTableModule,
  MatMenuModule,
  MatDialogModule,
} from '@angular/material';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [AlumnoEdicionComponent, AlumnoManagerComponent, AlumnoListaComponent, AlumnoItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    SharedModule,
    RouterModule.forChild([
      { path: ':operacion', component: AlumnoEdicionComponent },
      { path: ':operacion/:id', component: AlumnoEdicionComponent },
      { path: '', component: AlumnoManagerComponent },
    ]),
  ],
  exports: [],
})
export class AlumnoModule {}
