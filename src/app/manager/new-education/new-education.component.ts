import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Education } from 'src/app/models/education';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-new-education',
    templateUrl: './new-education.component.html',
    styleUrls: ['./new-education.component.css'],
})
export class NewEducationComponent implements OnInit {
    title = 'Nueva Educación';
    educationForm: FormGroup;
    id: string;

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private activeRoute: ActivatedRoute
    ) {
        this.educationForm = this.formBuilder.group({
            degree: ['', Validators.required],
            university: ['', Validators.required],
            inicio: ['', Validators.required],
            fin: ['', Validators.required],
            city: ['', Validators.required],
            imageUniversity: ['', Validators.required],
            description: ['', Validators.required],
        });
        this.id = this.activeRoute.snapshot.paramMap.get('id')!; // ! para que no sea null
    }

    ngOnInit(): void {
        this.isUpdate();
    }

    postEducationData() {
        const education: Education = {
            degree: this.educationForm.get('degree')?.value,
            university: this.educationForm.get('university')?.value,
            inicio: this.educationForm.get('inicio')?.value,
            fin: this.educationForm.get('fin')?.value,
            city: this.educationForm.get('city')?.value,
            imageUniversity: this.educationForm.get('imageUniversity')?.value,
            description: this.educationForm.get('description')?.value,
            id: Number(this.id),
        };
        if (this.id !== null) {
            // Actualizar skill
            this.portfolioService.putEducation(education).subscribe({
                next: (data) => {
                    this.toastr.info(
                        'Educación actualizada con éxito',
                        'Educación Actualizada'
                    );
                    this.router.navigate(['/']);
                },
            });
        } else {
            console.log(this.educationForm);
            this.portfolioService.postEducation(education).subscribe({
                next: (data) => {
                    this.toastr.success(
                        'La Educación fue creada con éxito',
                        'Educación Creada'
                    );
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error('Error al crear la Educación', 'Error');
                    console.error(err);
                },
            });
        }
    }

    isUpdate() {
        if (this.id !== null) {
            this.title = 'Actualizar Educación';
            this.portfolioService.getEducationById(this.id).subscribe({
                next: (data) => {
                    this.educationForm.patchValue({
                        degree: data.degree,
                        university: data.university,
                        inicio: data.inicio,
                        fin: data.fin,
                        city: data.city,
                        imageUniversity: data.imageUniversity,
                        description: data.description,
                    });
                },
                error: (err) => {
                    this.toastr.error('Error al obtener la Educación', 'Error');
                    console.error(err);
                },
            });
        }
    }
}
