import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposVeiculoComponent } from './components/tipos-veiculo/tipos-veiculo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "tipos-veiculo", component: TiposVeiculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
