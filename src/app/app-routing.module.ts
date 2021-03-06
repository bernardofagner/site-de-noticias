import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//App copmponents
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


// Não pode colocar '/' no path, senão da erro
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
