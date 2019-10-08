import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  { path:'game', component:GameComponent },
  { path:'home', component:HomeComponent },
 
  // { path:'**', pathMatch:'full' ,component:AppComponent },
  // { path:'',  pathMatch:'full' ,component:AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
