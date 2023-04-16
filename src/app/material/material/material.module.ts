import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports:[
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule { }
