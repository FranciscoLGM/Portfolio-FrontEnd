import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-new-project',
    templateUrl: './new-project.component.html',
    styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
    title = 'Nuevo Proyecto';
    projectForm: FormGroup;

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder
    ) {
        this.projectForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            imageProject: ['', Validators.required],
            urlProject: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    postProjectData() {
        const project: Project = {
            title: this.projectForm.get('title')?.value,
            description: this.projectForm.get('description')?.value,
            imageProject: this.projectForm.get('imageProject')?.value,
            urlProject: this.projectForm.get('urlProject')?.value,
        };
        console.log(this.projectForm);
        this.portfolioService.postProject(project).subscribe({
            next: (response) => {
                this.toastr.success(
                    'El Proyecto fue creado con éxito',
                    'Proyecto Creado'
                );
                this.router.navigate(['/']);
            },
            error: (err) => {
                this.toastr.error('Error al crear el Proyecto', 'Error');
                console.error(err);
            },
        });
    }
}
