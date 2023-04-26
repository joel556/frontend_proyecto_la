import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout-pagina/layout.component';
import { Error404Component } from './errors/error404/error404.component';
import { AuthGuard } from './guards/auth.guard';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';

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
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
      }
    ]
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
  exports: [RouterModule],
  declarations: [NotfoundComponent]
})
export class AppRoutingModule { }
