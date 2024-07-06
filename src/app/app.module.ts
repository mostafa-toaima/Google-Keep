import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotesComponent } from './components/notes/notes.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { MainComponent } from './main/main.component';
import {GridsterComponent, GridsterItemComponent} from 'angular-gridster2';
import { HomeComponent } from './home/home.component';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    NotesComponent,
    RemindersComponent,
    MainComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,GridsterComponent,GridsterItemComponent,NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
