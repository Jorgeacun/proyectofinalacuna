import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbogadoComponent } from './components/abogado/abogado.component';
import { JuzgadoComponent } from './components/juzgado/juzgado.component';

const routes: Routes = [  
  { path: 'abogado', component: AbogadoComponent },
  { path: 'juzgado', component: JuzgadoComponent },
  { path: '', pathMatch: 'full', redirectTo: '/abogado' },
  { path: '**', pathMatch: 'full', redirectTo: 'abogado' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
