import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { AlumnosArrayService } from '../../services/alumnos-array.service';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { StateService } from '../../services/state-manager.service';

@Component({
  selector: 'app-alumno-manager',
  templateUrl: './alumno-manager.component.html',
  styleUrls: ['./alumno-manager.component.css']
})
export class AlumnoManagerComponent implements OnInit {

  alumnos: Alumno[];
  alumnoSeleccionado: Alumno;

  constructor(
    private alumnosServices: AlumnosArrayService,
    public dialog: MatDialog,
    private router: Router,
    private stateService: StateService
  ) { }

  ngOnInit() {

    this.alumnos = this.alumnosServices.getAll();
    this.stateService.setApplicationTitle('Administración de Alumnos');

  }

  filtrarAlumnos(filtro: string) {
    this.alumnos = this.alumnosServices.filterByNombreApellido(filtro);
  }

  seleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    console.log(alumno);
  }

  agregarAlumno() {
    this.router.navigate(['alumnos', 'agregar']);
  }


  eliminarAlumno(alumno: Alumno) {
    const confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        titulo: 'Eliminar alumno',
        mensaje: `Desea eliminar al ${alumno.nombre} ${alumno.apellido}?`
      }
    });

    confirmDialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.alumnosServices.delete(alumno);
        this.alumnos = this.alumnosServices.getAll();
      }
    });

  }
}
