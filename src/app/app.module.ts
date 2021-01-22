import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatFormFieldModule, MatInputModule, MatCardModule,
  MatRadioModule, MatSelectModule, MatCheckboxModule, MatTableModule,
  MatMenuModule, MatDialogModule,
} from '@angular/material';
import { AlumnoItemComponent } from './alumno-item/alumno-item.component';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';
import { AlumnoManagerComponent } from './alumno-manager/alumno-manager.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { FormsModule } from '@angular/forms';
import { AlumnoEdicionComponent } from './alumno-edicion/alumno-edicion.component';
import { CursoManagerComponent } from './curso-manager/curso-manager.component';
import { AsistenciaManagerComponent } from './asistencia-manager/asistencia-manager.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlumnoItemComponent,
    AlumnoListaComponent,
    AlumnoManagerComponent,
    FilterBoxComponent,
    AlumnoEdicionComponent,
    CursoManagerComponent,
    AsistenciaManagerComponent,
    ConfirmDialogComponent
  ],
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
    RouterModule.forRoot([
      { path: 'alumnos' , component: AlumnoManagerComponent},
      { path: 'alumnos/:operacion/:id' , component: AlumnoEdicionComponent},
      { path: 'alumnos/:operacion' , component: AlumnoEdicionComponent},
      { path: 'cursos' , component: CursoManagerComponent},
      { path: 'asistencias' , component: AsistenciaManagerComponent},
      { path: '',  redirectTo: '/alumnos', pathMatch: 'full' },
      { path: '**',  redirectTo: '/alumnos', pathMatch: 'full' },
    ])
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
