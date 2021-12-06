import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HomeComponent } from './pages/home/home.component';
import { AngularinfoComponent } from './pages/angularinfo/angularinfo.component';
import { SpaComponent } from './pages/spa/spa.component';
import { TypescriptinfoComponent } from './pages/typescriptinfo/typescriptinfo.component';
import { ContactComponent } from './contact/contact.component';
import { AngularbildComponent } from './pages/angularinfo/angularbild/angularbild.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutmeComponent },
  {
    path: 'angular',
    component: AngularinfoComponent,
    children: [
      {
        path: 'info',
        component: AngularbildComponent,
      },
    ],
  },
  { path: 'spa', component: SpaComponent },
  { path: 'typescript', component: TypescriptinfoComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
