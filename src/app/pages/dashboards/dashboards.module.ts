import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule,NgbPaginationModule, NgbTypeaheadModule, NgbDatepickerModule,} from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AdvancedSortableDirective } from './targetdrive/advanced-sortable.directive';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TargetDriveComponent } from './targetdrive/targetdrive.component';
import { CreateDriveComponent } from './createdrive/createdrive.component';
import { TargetDrive1Component } from './TargetDrive1/targetdrive1.component';
import { MarketsComponent } from './Markets/markets.component';
import { salespersonsComponent } from './Salespersons/salespersons.component';

@NgModule({
  declarations: [TargetDriveComponent,AdvancedSortableDirective,CreateDriveComponent,TargetDrive1Component, MarketsComponent,salespersonsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,    
    SimplebarAngularModule,
    CKEditorModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    NgbCollapseModule, 
  ]
})
export class DashboardsModule { }
