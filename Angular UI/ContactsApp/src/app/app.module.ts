import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddContactComponent,
    ViewContactsComponent,
    EditProfileComponent,
    EditContactComponent,
    DeleteContactComponent,
    DeleteProfileComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
