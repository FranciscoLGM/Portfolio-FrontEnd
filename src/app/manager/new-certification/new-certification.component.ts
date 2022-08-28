import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Certification } from 'src/app/models/certification';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-new-certification',
    templateUrl: './new-certification.component.html',
    styleUrls: ['./new-certification.component.css'],
})
export class NewCertificationComponent implements OnInit {
    title = 'Nueva Certificación';
    certificationForm: FormGroup;
    id: string;

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private activeRoute: ActivatedRoute
    ) {
        this.certificationForm = this.formBuilder.group({
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

    postCertificationData() {
        const certification: Certification = {
            degree: this.certificationForm.get('degree')?.value,
            university: this.certificationForm.get('university')?.value,
            inicio: this.certificationForm.get('inicio')?.value,
            fin: this.certificationForm.get('fin')?.value,
            city: this.certificationForm.get('city')?.value,
            imageUniversity:
                this.certificationForm.get('imageUniversity')?.value,
            description: this.certificationForm.get('description')?.value,
            id: Number(this.id),
        };
        if (this.id !== null) {
            // Actualizar skill
            this.portfolioService.putCertification(certification).subscribe({
                next: (data) => {
                    this.toastr.info(
                        'Certificación actualizada con éxito',
                        'Certificación Actualizada'
                    );
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error(
                        'Error al actualizar la Certificación',
                        'Error'
                    );
                },
            });
        } else {
            console.log(this.certificationForm);
            this.portfolioService.postCertification(certification).subscribe({
                next: (data) => {
                    this.toastr.success(
                        'La Certificación fue creada con éxito',
                        'Certificación Creada'
                    );
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error(
                        'Error al crear la Certificación',
                        'Error'
                    );
                    console.error(err);
                },
            });
        }
    }

    isUpdate() {
        if (this.id !== null) {
            this.title = 'Actualizar Certificación';
            this.portfolioService.getCertificationById(this.id).subscribe({
                next: (data) => {
                    this.certificationForm.patchValue({
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
                    this.toastr.error(
                        'Error al obtener la Certificación',
                        'Error'
                    );
                    console.error(err);
                },
            });
        }
    }
}
