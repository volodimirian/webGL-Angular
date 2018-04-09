import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpheresComponent } from './components/spheres/spheres.component';

const routes: Routes = [
  {path: '', component: SpheresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
