import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
  
  // tslint:disable-next-line: max-line-length
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
