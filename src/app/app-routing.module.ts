import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HomeComponent } from './pages/home/home.component';
import { AngularinfoComponent } from './pages/angularinfo/angularinfo.component';
import { SpaComponent } from './pages/spa/spa.component';
import { TypescriptinfoComponent } from './components/typescriptinfo/typescriptinfo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'angular', component: AngularinfoComponent,  
  // children: [
    //   {
      //     path: 'info', 
      //     component: AngularinfoComponent, 
      //   },
      // ], 
    },
  { path: 'spa', component: SpaComponent },
  { path: 'typescript', component: TypescriptinfoComponent },

  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
