import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherForcastComponent } from './weather-forcast/weather-forcast.component';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AngularMaterialWfComponent } from './angular-material-wf/angular-material-wf.component';

//angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

//Posts
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { WixCloneComponent } from './wix-clone/wix-clone.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForcastComponent,
    AngularMaterialWfComponent,
    PostCreateComponent,
    PostListComponent,
    WixCloneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
