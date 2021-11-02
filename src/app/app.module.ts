import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialUi/material.module';
import { HomeComponent } from './home/home.component';
import { InfopageComponent } from './infopage/infopage.component';
import { AngularinfoComponent } from './pages/angularinfo/angularinfo.component';
import { SpaComponent } from './pages/spa/spa.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    InfopageComponent,
    AngularinfoComponent,
    SpaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
