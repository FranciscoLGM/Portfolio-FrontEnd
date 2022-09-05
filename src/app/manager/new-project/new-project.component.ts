import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    id: string;

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private activeRoute: ActivatedRoute
    ) {
        this.projectForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            imageProject: ['', Validators.required],
            urlProject: ['', Validators.required],
        });
        this.id = this.activeRoute.snapshot.paramMap.get('id')!; // ! para que no sea null
    }

    ngOnInit(): void {
        this.isUpdate();
    }

    postProjectData() {
        const project: Project = {
            title: this.projectForm.get('title')?.value,
            description: this.projectForm.get('description')?.value,
            imageProject: this.projectForm.get('imageProject')?.value,
            urlProject: this.projectForm.get('urlProject')?.value,
            id: Number(this.id),
        };
        if (this.id !== null) {
            // Actualizar skill
            this.portfolioService.putProject(project).subscribe({
                next: (data) => {
                    this.toastr.info('Proyecto actualizado con éxito!');
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error('Error al actualizar el Proyecto');
                    console.error(err);
                },
            });
        } else {
            console.log(this.projectForm);
            this.portfolioService.postProject(project).subscribe({
                next: (data) => {
                    this.toastr.success('Proyecto creado con éxito!');
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error('Error al crear el Proyecto');
                    console.error(err);
                },
            });
        }
    }

    isUpdate() {
        if (this.id !== null) {
            this.title = 'Actualizar Proyecto';
            this.portfolioService.getProjectById(this.id).subscribe({
                next: (data) => {
                    this.projectForm.patchValue({
                        title: data.title,
                        description: data.description,
                        imageProject: data.imageProject,
                        urlProject: data.urlProject,
                    });
                },
                error: (err) => {
                    this.toastr.error('Error al obtener el Proyecto');
                    console.error(err);
                },
            });
        }
    }
}
