import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NewSkillComponent } from './manager/new-skill/new-skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewExpertiseComponent } from './manager/new-expertise/new-expertise.component';
import { NewEducationComponent } from './manager/new-education/new-education.component';
import { NewCertificationComponent } from './manager/new-certification/new-certification.component';
import { NewProjectComponent } from './manager/new-project/new-project.component';
import { NewProfileComponent } from './manager/new-profile/new-profile.component';
import { interceptorProvider } from './interceptors/portfolio-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        ExpertiseComponent,
        EducationComponent,
        SkillsComponent,
        ProjectsComponent,
        FooterComponent,
        NavbarComponent,
        LoginComponent,
        HomeComponent,
        ContactComponent,
        NewSkillComponent,
        NewExpertiseComponent,
        NewEducationComponent,
        NewCertificationComponent,
        NewProjectComponent,
        NewProfileComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [interceptorProvider],
    bootstrap: [AppComponent],
})
export class AppModule {}
