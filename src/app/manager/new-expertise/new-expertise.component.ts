import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder
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
    }

    ngOnInit(): void {}

    postExpertiseData() {
        const expertise: Expertise = {
            position: this.expertiseForm.get('position')?.value,
            company: this.expertiseForm.get('company')?.value,
            inicio: this.expertiseForm.get('inicio')?.value,
            fin: this.expertiseForm.get('fin')?.value,
            city: this.expertiseForm.get('city')?.value,
            imageCompany: this.expertiseForm.get('imageCompany')?.value,
            description: this.expertiseForm.get('description')?.value,
        };
        console.log(this.expertiseForm);
        this.portfolioService.postExpertise(expertise).subscribe({
            next: (response) => {
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
