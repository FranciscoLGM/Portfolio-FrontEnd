import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill';
import { portfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
    title = 'Mis Habilidades';
    skills: Skill[] = [];
    isLogged = false;

    constructor(
        private portfolioService: portfolioService,
        private toastr: ToastrService,
        private tokenService: TokenService
    ) {}

    ngOnInit(): void {
        this.getSkillData();

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }
    private getSkillData() {
        this.portfolioService.getSkill().subscribe((data) => {
            // console.log(data);
            this.skills = data;
        });
    }

    deleteSkillData(id: any) {
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Si eliminas esta habilidad, no podras recuperarla!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar',
            position: 'top',
        })
            .then((result) => {
                if (result.value) {
                    this.portfolioService.deleteSkill(id).subscribe({
                        next: (response) => {
                            this.toastr.success(
                                'La Habilidad fue eliminada con éxito',
                                'Habilidad Eliminada'
                            );
                            this.getSkillData();
                        },
                    });
                }
            })
            .catch(() => {
                this.toastr.error('Error al eliminar la Habilidad', 'Error');
            })
            .finally(() => {
                this.getSkillData();
            });
    }
}
