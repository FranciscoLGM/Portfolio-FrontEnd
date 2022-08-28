import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Certification } from 'src/app/models/certification';
import { Education } from 'src/app/models/education';
import { portfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
    title = 'Educación';
    title2 = 'Licencias y Certificaciones';
    educations: Education[] = [];
    certifications: Certification[] = [];
    isLogged = false;

    constructor(
        private portfolioService: portfolioService,
        private toastr: ToastrService,
        private tokenService: TokenService
    ) {}

    ngOnInit(): void {
        this.getEducationData();
        this.getCertificationData();

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    private getEducationData() {
        this.portfolioService.getEducation().subscribe({
            next: (data) => {
                this.educations = data;
            },
        });
    }

    private getCertificationData() {
        this.portfolioService.getCertification().subscribe({
            next: (data) => {
                this.certifications = data;
            },
        });
    }

    deleteEducationData(id: any) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'No podrás revertir esto',
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
                    this.portfolioService.deleteEducation(id).subscribe({
                        next: (data) => {
                            this.toastr.success(
                                'Educación eliminada con éxito',
                                'Educación Eliminada'
                            );
                            this.getEducationData();
                        },
                    });
                }
            })
            .catch(() => {
                this.toastr.error('Error al eliminar', 'Error');
            })
            .finally(() => {
                this.getEducationData();
            });
    }

    deleteCertificationData(id: any) {
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Si eliminas esta certificación, no podras recuperarla!',
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
                    this.portfolioService.deleteCertification(id).subscribe({
                        next: (data) => {
                            this.toastr.success(
                                'La Certificación fue eliminada con éxito',
                                'Certificación Eliminada'
                            );
                            this.getCertificationData();
                        },
                    });
                }
            })
            .catch(() => {
                this.toastr.error(
                    'Error al eliminar la Certificación',
                    'Error'
                );
            })
            .finally(() => {
                this.getCertificationData();
            });
    }
}
