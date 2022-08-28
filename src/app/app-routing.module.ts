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
import { PortfolioGuardService as guard } from './guards/portfolio-guard.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'nueva-experiencia',
        component: NewExpertiseComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin'] },
    },
    {
        path: 'nueva-educacion',
        component: NewEducationComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin'] },
    },
    {
        path: 'nueva-certificacion',
        component: NewCertificationComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin'] },
    },
    {
        path: 'nueva-habilidad',
        component: NewSkillComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin'] },
    },
    {
        path: 'nuevo-proyecto',
        component: NewProjectComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin'] },
    },
    {
        path: 'editar-perfil/:id',
        component: NewProfileComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin'] },
    },
    {
        path: 'editar-experiencia/:id',
        component: NewExpertiseComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin', 'user'] },
    },
    { path: 'editar-educacion/:id', component: NewEducationComponent },
    {
        path: 'editar-certificacion/:id',
        component: NewCertificationComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin', 'user'] },
    },
    {
        path: 'editar-habilidad/:id',
        component: NewSkillComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin', 'user'] },
    },
    {
        path: 'editar-proyecto/:id',
        component: NewProjectComponent,
        canActivate: [guard],
        data: { expectedRole: ['admin', 'user'] },
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
