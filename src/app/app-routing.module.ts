import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewCertificationComponent } from './manager/new-certification/new-certification.component';
import { NewEducationComponent } from './manager/new-education/new-education.component';
import { NewExpertiseComponent } from './manager/new-expertise/new-expertise.component';
import { NewProfileComponent } from './manager/new-profile/new-profile.component';
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
    { path: 'editar-perfil/:id', component: NewProfileComponent },
    { path: 'editar-experiencia/:id', component: NewExpertiseComponent },
    { path: 'editar-educacion/:id', component: NewEducationComponent },
    { path: 'editar-certificacion/:id', component: NewCertificationComponent },
    { path: 'editar-habilidad/:id', component: NewSkillComponent },
    { path: 'editar-proyecto/:id', component: NewProjectComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
