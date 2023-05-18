import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule), canActivate:[AuthGuard] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //redirect to home
  { path: '**', redirectTo: 'login' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);