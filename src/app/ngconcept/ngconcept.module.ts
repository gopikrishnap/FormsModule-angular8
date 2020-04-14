import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';
import { NgStyleClassComponent } from './ng-style-class/ng-style-class.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StringinterProertryBindComponent } from './stringinter-proertry-bind/stringinter-proertry-bind.component';
import { SearchMoreLessComponent } from '../search-more-less/search-more-less.component';

const ngconcept: Routes = [
  { path: 'ngif', component: NgIfForComponent },
  { path: 'ngstyle', component: NgStyleClassComponent },
  { path: 'stringbind', component: StringinterProertryBindComponent },
  { path: 'Searchmore', component: SearchMoreLessComponent }

]
@NgModule({
  declarations: [NgIfForComponent,
    NgStyleClassComponent,
    StringinterProertryBindComponent,
    SearchMoreLessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ngconcept),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NgconceptModule { }








