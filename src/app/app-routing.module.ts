import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { authGuard } from './services/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { canDeactivateGraurdService } from './canDeactiveGraud.service';
import { ResovleRouterComponent } from './resovle-router/resovle-router.component';
import { resolveService } from './fetch-resolve-service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'resolve',
    component: ResovleRouterComponent,
    resolve: { data: resolveService },
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [authGuard],
    canDeactivate: [canDeactivateGraurdService],
  },
  {
    path: 'movie/:type/:id',
    component: MoviesComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
