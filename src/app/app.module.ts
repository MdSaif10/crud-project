import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SiteFrameworkModule,
    MaterialModule,
    ScrollingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
