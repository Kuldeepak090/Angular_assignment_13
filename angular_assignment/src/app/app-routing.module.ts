import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutComponent},
  {path:'contactus', component:ContactComponent},
  {path:'skill',component:SkillsComponent},
  {path:'education',component:EducationComponent},
  {path:'project',component:ProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
