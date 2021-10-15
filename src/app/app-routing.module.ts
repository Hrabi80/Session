import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionIndicatorComponent } from './session-indicator/session-indicator.component';
import { SessionGuard } from './session.guard';

const routes: Routes = [
  {path:'session', component:SessionIndicatorComponent, canActivate:[SessionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
