import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component';
import { Error404Component } from './errors/error404/error404.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
       {
        path:'',
        component: InicioComponent,
        //canActivate: [AuthGuard]
      },
      {
        path: 'auth',
        loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'no-encontrado-404',
    component: Error404Component
  },
  {
    path: '**', redirectTo: '/no-encontrado-404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
