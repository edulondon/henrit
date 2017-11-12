import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component"; 

const APP_ROUTES: Routes = [   
  { path: '', component: HomeComponent },
 // { path: 'add-cio', component: NewcioComponent }, 
  { path: '', redirectTo: '', pathMatch: 'full' },
  //{ path: 'comment-detail/:id', component: CommentDetailComponent },
   // otherwise redirect to home
    { path: '**', redirectTo: '' }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
