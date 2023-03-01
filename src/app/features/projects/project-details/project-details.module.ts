import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
    path: '',
    component: ProjectDetailsComponent
  }
]

@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ProjectDetailsModule { }
