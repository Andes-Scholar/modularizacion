import { LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatMenuModule, MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AlumnoEdicionComponent } from "./alumno-edicion/alumno-edicion.component";
import { AlumnoItemComponent } from "./alumno-item/alumno-item.component";
import { AlumnoListaComponent } from "./alumno-lista/alumno-lista.component";
import { AlumnoManagerComponent } from "./alumno-manager/alumno-manager.component";
import { FilterBoxComponent } from "./filter-box/filter-box.component";

//pathMatch: 'full'


@NgModule({
    imports: [
        CommonModule, 
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
        RouterModule.forChild([      
            { path: '' , component: AlumnoManagerComponent},
            { path: '/:operacion/:id' , component: AlumnoEdicionComponent},
            { path: '/:operacion' , component: AlumnoEdicionComponent},
          ])
    ],
    declarations: [
        AlumnoEdicionComponent,
        AlumnoItemComponent,
        AlumnoListaComponent,
        AlumnoManagerComponent,
        FilterBoxComponent
    ],
})
export class AlumnoModule {}