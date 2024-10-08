import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
// import { BlogListComponent, BlogAddComponent, BlogEditComponent, BlogViewComponent } from './blog';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { AuthGuard, LoginFormComponent, RegisterUserComponent } from './security';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent, },
  { path: 'demos', component: DemosComponent, },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent, data: { pageTitle: 'calculadora'}},
  { path: 'contactos', component: ContactosListComponent },
  { path: 'contactos/add', component: ContactosAddComponent },
  { path: 'contactos/:id/edit', component: ContactosEditComponent },
  { path: 'contactos/:id', component: ContactosViewComponent },
  { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  { path: 'alysia/baxendale', redirectTo: '/contactos/43' },
  // { path: 'blog', children: [
  //   { path: '', component: BlogListComponent },
  //   { path: 'add', component: BlogAddComponent },
  //   { path: ':id/edit', component: BlogEditComponent },
  //   { path: ':id', component: BlogViewComponent },
  //   { path: ':id/:kk', component: BlogViewComponent },
  // ], canActivateChild: [AuthGuard]},
  { path: 'blog', loadChildren: () => import('./blog').then(mod => mod.BlogModule), canActivate: [AuthGuard], data: { redirectTo: '/login'}, /*canDeactivate: [() => inject(AuthService). isAutenticated],*/ },
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule) },

  { path: 'login', component: LoginFormComponent },
  { path: 'registro', component: RegisterUserComponent },

  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {/*enableTracing: true*/})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
