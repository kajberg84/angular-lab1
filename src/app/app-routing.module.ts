import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { InfopageComponent } from './infopage/infopage.component';
import { AngularinfoComponent } from './pages/angularinfo/angularinfo.component';
import { SpaComponent } from './pages/spa/spa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'infopage', component: InfopageComponent,  
  children: [
    {
      path: 'angularinfo', 
      component: AngularinfoComponent, 
    },
    {
      path: 'spa',
      component: SpaComponent, 
    },
  ], },
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
