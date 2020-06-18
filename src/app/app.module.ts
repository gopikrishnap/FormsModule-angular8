import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { Routes, RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { ObservablesComponent } from './observables/observables.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TollywoodArtistsComponent } from './tollywood-artists/tollywood-artists.component';
import { HeroHeroinsComponent } from './tollywood-artists/hero-heroins/hero-heroins.component';
import { ComediansComponent } from './tollywood-artists/comedians/comedians.component';
import { PipesallPipe } from './pipesall.pipe';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { NgconceptComponent } from './ngconcept/ngconcept.component';
import { LeadinfoDetailsComponent } from './leadinfo-details/leadinfo-details.component';
import{AngularMaterialModule} from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsvalidationsComponent } from './formsvalidations/formsvalidations.component';
import { NestedFormgroupComponent } from './nested-formgroup/nested-formgroup.component';


const routes: Routes = [
  { path: '', redirectTo: 'leadinfo', pathMatch: 'full' },
  { path: 'ReactiveForms', component: ReactiveFormsComponent },
  { path: 'TemplateDrivenFormsComponent', component: TemplateDrivenFormsComponent },
  {
    path: 'dropdown',
    loadChildren: () => import('./dropdown/dropdown.module').then(m => m.DropdownModule)
  },
  { path: 'tollywiidartists', component: TollywoodArtistsComponent },
  { path: 'tollywiidartists/:id', component: HeroHeroinsComponent },
  { path: 'moviesearch', component: SearchMovieComponent },
  {
    path: 'ngconcept',
    loadChildren: () => import('./ngconcept/ngconcept.module').then(m => m.NgconceptModule)
  },
  {path:'leadinfo',component:LeadinfoDetailsComponent},
  {path:'formsvalidations',component:FormsvalidationsComponent},
  {path:'NestedForm',component:NestedFormgroupComponent},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    ObservablesComponent,
    PipesallPipe,
    PageNotFoundComponent,
    TollywoodArtistsComponent,
    HeroHeroinsComponent,
    ComediansComponent,
    SearchMovieComponent,
    NgconceptComponent,
    LeadinfoDetailsComponent,
    FormsvalidationsComponent,
    NestedFormgroupComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
     AngularMaterialModule,
    BrowserAnimationsModule,
    // MatButtonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
