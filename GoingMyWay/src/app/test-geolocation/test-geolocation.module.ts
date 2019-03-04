import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestGeolocationPage } from './test-geolocation.page';

const routes: Routes = [
  {
    path: '',
    component: TestGeolocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestGeolocationPage]
})
export class TestGeolocationPageModule {}
