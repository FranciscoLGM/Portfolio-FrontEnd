import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder
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
    }

    ngOnInit(): void {}

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
        };
        console.log(this.certificationForm);
        this.portfolioService.postCertification(certification).subscribe({
            next: (response) => {
                this.toastr.success(
                    'La Certificación fue creada con éxito',
                    'Certificación Creada'
                );
                this.router.navigate(['/']);
            },
            error: (err) => {
                this.toastr.error('Error al crear la Certificación', 'Error');
                console.error(err);
            },
        });
    }
}
