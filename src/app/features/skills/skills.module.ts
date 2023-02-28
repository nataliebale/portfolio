import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
    path: '',
    component: SkillsComponent
  }
]

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class SkillsModule { }
