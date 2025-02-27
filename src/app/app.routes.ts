import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/components/auth/auth.component';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { MainComponent } from './layouts/components/main/main.component';
import { HomeComponent } from './pages/components/home/home.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { guestGuard } from './core/guards/guest/guest.guard';
import { NotesComponent } from './pages/components/notes/notes.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home' ,pathMatch:'full' },
    {
        path: '', component: AuthComponent,canActivate:[guestGuard] , children: [
            { path: 'login', component: LoginComponent, title: 'loginPage' },
            { path: 'register', component: RegisterComponent, title: 'registerPage' }
        ]
    },
    {path:'' , component:MainComponent , canActivate:[authGuard] ,children:[
        {path:'home' , component:HomeComponent , title:'homePage'},
        {path:'notes' , component:NotesComponent , title:'notesPage'}
    ]}
];
