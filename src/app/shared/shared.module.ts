import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatDialogModule, MatSnackBarModule, MatCardModule, MatRadioModule, MatTableModule, MatSelectModule, MatTabsModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule} from '@angular/material';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatDialogModule, MatSnackBarModule, MatCardModule, MatRadioModule, MatTableModule, MatSelectModule, MatTabsModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    MatDialogModule, MatSnackBarModule, MatCardModule, MatRadioModule, MatTableModule, MatSelectModule, MatTabsModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule

  ]
})
export class SharedModule { 
  constructor(private translate : TranslateService){
      translate.use('en');
    } 
}
