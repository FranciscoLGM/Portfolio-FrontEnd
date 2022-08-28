import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Expertise } from 'src/app/models/expertise';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-new-expertise',
    templateUrl: './new-expertise.component.html',
    styleUrls: ['./new-expertise.component.css'],
})
export class NewExpertiseComponent implements OnInit {
    title = 'Nueva Experiencia';
    expertiseForm: FormGroup;
    id: string;

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private activeRoute: ActivatedRoute
    ) {
        this.expertiseForm = this.formBuilder.group({
            position: ['', Validators.required],
            company: ['', Validators.required],
            inicio: ['', Validators.required],
            fin: ['', Validators.required],
            city: ['', Validators.required],
            imageCompany: ['', Validators.required],
            description: ['', Validators.required],
        });
        this.id = this.activeRoute.snapshot.paramMap.get('id')!; // ! para que no sea null
    }

    ngOnInit(): void {
        this.isUpdate();
    }

    postExpertiseData() {
        const expertise: Expertise = {
            position: this.expertiseForm.get('position')?.value,
            company: this.expertiseForm.get('company')?.value,
            inicio: this.expertiseForm.get('inicio')?.value,
            fin: this.expertiseForm.get('fin')?.value,
            city: this.expertiseForm.get('city')?.value,
            imageCompany: this.expertiseForm.get('imageCompany')?.value,
            description: this.expertiseForm.get('description')?.value,
            id: Number(this.id),
        };

        if (this.id !== null) {
            // Actualizar expertise
            this.portfolioService.putExpertise(expertise).subscribe({
                next: (data) => {
                    this.toastr.info(
                        'Experiencia actualizada con éxito',
                        'Experiencia Actualizada'
                    );
                    this.router.navigate(['/']);
                },
            });
        } else {
            console.log(this.expertiseForm);
            this.portfolioService.postExpertise(expertise).subscribe({
                next: (data) => {
                    this.toastr.success(
                        'La Experiencia fue creada con éxito',
                        'Experiencia Creada'
                    );
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error('Error al crear la Experiencia', 'Error');
                    console.error(err);
                },
            });
        }
    }

    isUpdate() {
        if (this.id !== null) {
            this.title = 'Actualizar Experiencia';
            this.portfolioService.getExpertiseById(this.id).subscribe({
                next: (data) => {
                    this.expertiseForm.patchValue({
                        position: data.position,
                        company: data.company,
                        inicio: data.inicio,
                        fin: data.fin,
                        city: data.city,
                        imageCompany: data.imageCompany,
                        description: data.description,
                    });
                },
                error: (err) => {
                    this.toastr.error(
                        'Error al obtener la Experiencia',
                        'Error'
                    );
                    console.error(err);
                },
            });
        }
    }
}
