import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'add-contact/:userId', component : AddContactComponent },
  { path : 'delete-contact/:userId', component : DeleteContactComponent },
  { path : 'edit-contact/:userId', component : EditContactComponent },
  { path : 'edit-profile/:userId', component : EditProfileComponent },
  { path : 'delete-profile/:userId', component : DeleteProfileComponent },
  { path : 'registration', component : RegisterComponent },
  { path : 'logout', component : LogoutComponent },
  { path : 'home/:userId', component : HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
