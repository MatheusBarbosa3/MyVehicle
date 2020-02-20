import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposVeiculoComponent } from './components/tipos-veiculo/tipos-veiculo.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tipos-veiculo', component: TiposVeiculoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
