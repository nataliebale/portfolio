import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "./projects.component";

const ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./project-details/project-details.module').then((m) => m.ProjectDetailsModule)

  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
