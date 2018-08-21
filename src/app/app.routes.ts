import { Routes } from '@angular/router';

import { SecondComponent } from './second/second.component';

export const appRoutes: Routes = [ 

    { path: 'second', component: SecondComponent },
   
    { path: '**', redirectTo: '' }
  ];
