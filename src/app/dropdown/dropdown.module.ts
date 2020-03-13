import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './collegeSearch/college.component';
import { Routes, RouterModule } from '@angular/router';


const routeschild: Routes = [
  // {path:'',component:DropdownComponent,pathMatch:'full'},
  {path:'school',component:SchoolComponent},
  {path: 'college',component:CollegeComponent},
  // {path: '**',component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    DropdownComponent,
    SchoolComponent,
    CollegeComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeschild)
  ]
})
export class DropdownModule { 
}
