import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-new-skill',
    templateUrl: './new-skill.component.html',
    styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent implements OnInit {
    title = 'Nueva Habilidad';
    skillForm: FormGroup;
    id: string;

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private activeRoute: ActivatedRoute
    ) {
        this.skillForm = this.formBuilder.group({
            skill: ['', Validators.required],
            rate: ['', Validators.required],
        });
        this.id = this.activeRoute.snapshot.paramMap.get('id')!; // ! para que no sea null
    }

    ngOnInit(): void {
        this.isUpdate();
    }

    postSkillData() {
        const skill: Skill = {
            skill: this.skillForm.get('skill')?.value,
            rate: this.skillForm.get('rate')?.value,
            id: Number(this.id),
        };

        if (this.id !== null) {
            // Actualizar skill
            this.portfolioService.putSkill(skill).subscribe({
                next: (data) => {
                    this.toastr.info(
                        'Habilidad actualizada con éxito',
                        'Habilidad Actualizada'
                    );
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error(
                        'Error al actualizar la habilidad',
                        'Error'
                    );
                },
            });
        } else {
            console.log(this.skillForm);
            this.portfolioService.postSkill(skill).subscribe({
                next: (data) => {
                    this.toastr.success(
                        'La Habilidad fue creada con éxito',
                        'Habilidad Creada'
                    );
                    this.router.navigate(['/']);
                },
                error: (err) => {
                    this.toastr.error('Error al crear la Habilidad', 'Error');
                    console.error(err);
                },
            });
        }
    }

    isUpdate() {
        if (this.id !== null) {
            this.title = 'Actualizar Habilidad';
            this.portfolioService.getSkillById(this.id).subscribe({
                next: (response) => {
                    this.skillForm.patchValue({
                        skill: response.skill,
                        rate: response.rate,
                    });
                },
                error: (err) => {
                    this.toastr.error('Error al obtener la Habilidad', 'Error');
                    console.error(err);
                },
            });
        }
    }
}
