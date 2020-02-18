import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasComponent } from './components/marcas/marcas.component';

const routes: Routes = [
  { path: "marcas", component: MarcasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
