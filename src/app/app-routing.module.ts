import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TimelinesComponent } from './views/timelines/timelines.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   imports: [RouterModule.forRoot(routes, {
//     preloadingStrategy: PreloadAllModules
//   })],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }
