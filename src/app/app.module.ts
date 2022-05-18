import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FacilityComponent } from './facility/facility.component';
import { DepartmentComponent } from './department/department.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'enterprise', component: EnterpriseComponent },
      { path: 'facility', component: FacilityComponent},
      { path: 'department', component: DepartmentComponent}
    ]),
  ],
  declarations: [
  AppComponent,
  TopHeaderComponent, 
  MainPageComponent,
  EnterpriseComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
