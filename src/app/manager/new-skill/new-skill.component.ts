import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

    constructor(
        private portfolioService: portfolioService,
        private router: Router,
        private toastr: ToastrService,
        private formBuilder: FormBuilder
    ) {
        this.skillForm = this.formBuilder.group({
            skill: ['', Validators.required],
            rate: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    postSkillData() {
        const skill: Skill = {
            skill: this.skillForm.get('skill')?.value,
            rate: this.skillForm.get('rate')?.value,
        };
        console.log(this.skillForm);
        this.portfolioService.postSkill(skill).subscribe({
            next: (response) => {
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
