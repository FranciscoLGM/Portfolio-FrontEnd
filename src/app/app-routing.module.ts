import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewCertificationComponent } from './manager/new-certification/new-certification.component';
import { NewEducationComponent } from './manager/new-education/new-education.component';
import { NewExpertiseComponent } from './manager/new-expertise/new-expertise.component';
import { NewProjectComponent } from './manager/new-project/new-project.component';
import { NewSkillComponent } from './manager/new-skill/new-skill.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nueva-experiencia', component: NewExpertiseComponent },
    { path: 'nueva-educacion', component: NewEducationComponent },
    { path: 'nueva-certificacion', component: NewCertificationComponent },
    { path: 'nueva-habilidad', component: NewSkillComponent },
    { path: 'nuevo-proyecto', component: NewProjectComponent },
    { path: 'editar-habilidad/:id', component: NewSkillComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
