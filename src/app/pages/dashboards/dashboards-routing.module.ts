import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { TargetDriveComponent } from './targetdrive/targetdrive.component';
import { TargetDrive1Component } from './TargetDrive1/targetdrive1.component';
import { CreateDriveComponent } from './createdrive/createdrive.component';
import { MarketsComponent } from './Markets/markets.component';
import { salespersonsComponent } from './salespersons/salespersons.component';

const routes: Routes = [
    
    {
      path: 'targetdrive',
        component: TargetDriveComponent
    },
    {
      path: 'targetdrive1',
        component: TargetDrive1Component
    },
    {
      path: 'markets',
        component: MarketsComponent
    },
    {
      path: 'salespersons',
        component: salespersonsComponent
    },
    {
      path: 'createdrive',
        component: CreateDriveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
