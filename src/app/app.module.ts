import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { AddPasswordComponent } from './add-password/add-password.component';
import { ViewPasswordsComponent } from './view-passwords/view-passwords.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordsComponent,
    AddPasswordComponent,
    ViewPasswordsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path:'', redirectTo: '', pathMatch:'full'},
      {path:'view-passwords', component: ViewPasswordsComponent},
      {path:'add-password', component: AddPasswordComponent}
    ]),
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
