import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'main',pathMatch:'full'},
  {
  
    path: 'main',
    component: MainComponent, title: 'mostafa',
    children: [
      
      { path: 'notes', component: NotesComponent, title: 'notes' },
      { path: 'reminders', component: RemindersComponent, title: 'reminders' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
