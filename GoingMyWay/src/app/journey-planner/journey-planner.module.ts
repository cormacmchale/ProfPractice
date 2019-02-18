import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JourneyPlannerPage } from './journey-planner.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyPlannerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JourneyPlannerPage]
})
export class JourneyPlannerPageModule {}
