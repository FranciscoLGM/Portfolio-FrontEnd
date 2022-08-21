import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/models/person';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-new-profile',
    templateUrl: './new-profile.component.html',
    styleUrls: ['./new-profile.component.css'],
})
export class NewProfileComponent implements OnInit {
    title = 'Actualizar Perfil';
    profileForm: FormGroup;
    id: string;

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private activeRoute: ActivatedRoute
    ) {
        this.profileForm = this.formBuilder.group({
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            profession: ['', Validators.required],
            occupation: ['', Validators.required],
            heroDescription: ['', Validators.required],
            aboutDescription: ['', Validators.required],
            imageProfile: ['', Validators.required],
        });
        this.id = this.activeRoute.snapshot.paramMap.get('id')!; // ! para que no sea null
    }

    ngOnInit(): void {
        this.isUpdate();
    }

    postProfileData() {
        const profile: Person = {
            name: this.profileForm.get('name')?.value,
            lastname: this.profileForm.get('lastname')?.value,
            profession: this.profileForm.get('profession')?.value,
            occupation: this.profileForm.get('occupation')?.value,
            heroDescription: this.profileForm.get('heroDescription')?.value,
            aboutDescription: this.profileForm.get('aboutDescription')?.value,
            imageProfile: this.profileForm.get('imageProfile')?.value,
            id: Number(this.id),
        };

        if (this.id !== null) {
            // Actualizar expertise
            this.portfolioService.putPerson(profile).subscribe({
                next: (response) => {
                    this.toastr.info(
                        'Perfil actualizado con éxito',
                        'Perfil Actualizado'
                    );
                    this.router.navigate(['/']);
                },
            });
        } else {
            // Crear expertise
            this.portfolioService.postPerson(profile).subscribe({
                next: (response) => {
                    this.toastr.info(
                        'Perfil creado con éxito',
                        'Perfil Creado'
                    );
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error('Error al crear el perfil', 'Error');
                    console.error(err);
                },
            });
        }
    }

    isUpdate() {
        if (this.id !== null) {
            this.portfolioService.getPersonById(this.id).subscribe({
                next: (response) => {
                    this.profileForm.patchValue({
                        name: response.name,
                        lastname: response.lastname,
                        profession: response.profession,
                        occupation: response.occupation,
                        heroDescription: response.heroDescription,
                        aboutDescription: response.aboutDescription,
                        imageProfile: response.imageProfile,
                    });
                },
                error: (err) => {
                    this.toastr.error('Error al obtener el perfil', 'Error');
                    console.error(err);
                },
            });
        }
    }
}
