import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableListComponent } from './table-list/table-list.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatPaginatorModule,
    TableListComponent
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
