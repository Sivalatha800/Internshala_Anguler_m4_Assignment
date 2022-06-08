import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcomponentComponent } from './acomponent/acomponent.component';
import { BcomponentComponent } from './bcomponent/bcomponent.component';
import { CcomponentComponent } from './ccomponent/ccomponent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'acomponent',
    pathMatch: 'full',
  },
  { path: 'acomponent', component: AcomponentComponent },

  { path: 'bcomponent/:name', component: BcomponentComponent },
  { path: 'ccomponent/:name/:age', component: CcomponentComponent },
  { path: '**', redirectTo: 'acomponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
