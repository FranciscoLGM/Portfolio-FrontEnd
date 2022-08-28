import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Expertise } from 'src/app/models/expertise';
import { portfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-expertise',
    templateUrl: './expertise.component.html',
    styleUrls: ['./expertise.component.css'],
})
export class ExpertiseComponent implements OnInit {
    title = 'Experiencia';
    expertises: Expertise[] = [];
    isLogged = false;

    constructor(
        private portfolioService: portfolioService,
        private toastr: ToastrService,
        private tokenService: TokenService
    ) {}

    ngOnInit(): void {
        this.getExpertiseData();

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    private getExpertiseData() {
        this.portfolioService.getExpertise().subscribe((data) => {
            // console.log(data);
            this.expertises = data;
        });
    }

    deleteExpertiseData(id: any) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Si eliminas esta experiencia, no podras recuperarla!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            position: 'top',
        })
            .then((result) => {
                if (result.value) {
                    this.portfolioService.deleteExpertise(id).subscribe({
                        next: (response) => {
                            this.toastr.success(
                                'Experiencia eliminada con éxito',
                                'Experiencia Eliminada'
                            );
                            this.getExpertiseData();
                        },
                    });
                }
            })
            .catch(() => {
                this.toastr.error('Error al eliminar la experiencia', 'Error');
            })
            .finally(() => {
                this.getExpertiseData();
            });
    }
}
