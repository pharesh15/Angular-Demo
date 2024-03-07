import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create', component: CreateBinComponent, canActivate: [authGuard], pathMatch: "full" },
    { path: 'login', component: LoginComponent, pathMatch: "full" },
    { path: 'signup', component: SignupComponent, pathMatch: "full" },
    { path: 'about', component: AboutComponent, pathMatch: "full" },
    // { path: '', redirectTo: "/login", pathMatch: "full" },
    { path: '**', component: NotFoundComponent }
];
