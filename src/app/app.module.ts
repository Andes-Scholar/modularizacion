import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
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
import { FormsModule } from '@angular/forms';
import { CursoManagerComponent } from './curso-manager/curso-manager.component';
import { AsistenciaManagerComponent } from './asistencia-manager/asistencia-manager.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MenuComponent, CursoManagerComponent, AsistenciaManagerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
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
    RouterModule.forRoot([
      { path: 'alumnos', loadChildren: () => import('./alumno/alumno.module').then((m) => m.AlumnoModule) },
      { path: 'cursos', component: CursoManagerComponent },
      { path: 'asistencias', component: AsistenciaManagerComponent },
      { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
      { path: '**', redirectTo: '/alumnos', pathMatch: 'full' },
    ]),
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
