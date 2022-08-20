import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder
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
    }

    ngOnInit(): void {}

    postEducationData() {
        const education: Education = {
            degree: this.educationForm.get('degree')?.value,
            university: this.educationForm.get('university')?.value,
            inicio: this.educationForm.get('inicio')?.value,
            fin: this.educationForm.get('fin')?.value,
            city: this.educationForm.get('city')?.value,
            imageUniversity: this.educationForm.get('imageUniversity')?.value,
            description: this.educationForm.get('description')?.value,
        };
        console.log(this.educationForm);
        this.portfolioService.postEducation(education).subscribe({
            next: (response) => {
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
