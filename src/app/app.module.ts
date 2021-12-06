import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialUi/material.module';
import { HomeComponent } from './pages/home/home.component';
import { AngularinfoComponent } from './pages/angularinfo/angularinfo.component';
import { SpaComponent } from './pages/spa/spa.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TypescriptinfoComponent } from './pages/typescriptinfo/typescriptinfo.component';
import { ContactComponent } from './contact/contact.component';
import { AngularbildComponent } from './pages/angularinfo/angularbild/angularbild.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    AngularinfoComponent,
    SpaComponent,
    FooterComponent,
    HeaderComponent,
    TypescriptinfoComponent,
    ContactComponent,
    AngularbildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
