import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//these are the Routes for the app to follow when encountering a url ending in the path
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'database', loadChildren: './database/database.module#DatabasePageModule' },
  { path: 'journey-planner', loadChildren: './journey-planner/journey-planner.module#JourneyPlannerPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
