import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./features/skills/skills.module').then((m) => m.SkillsModule)
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.module').then((m) => m.ProjectsModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () =>
      import('./features/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
