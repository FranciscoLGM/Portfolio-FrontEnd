import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project';
import { portfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
    title = 'Mis Proyectos';
    projects: Project[] = [];
    isLogged = false;

    constructor(
        private portfolioService: portfolioService,
        private toastr: ToastrService,
        private tokenService: TokenService
    ) {}

    ngOnInit(): void {
        this.getProjectData();

        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    private getProjectData() {
        this.portfolioService.getProject().subscribe({
            next: (data) => {
                this.projects = data;
            },
        });
    }

    deleteProjectData(id: any) {
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Si eliminas este proyecto, no podras recuperarlo!',
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
                    this.portfolioService.deleteProject(id).subscribe({
                        next: (data) => {
                            this.toastr.warning(
                                'Proyecto eliminado con éxito!'
                            );
                            this.getProjectData();
                        },
                    });
                }
            })
            .catch(() => {
                this.toastr.error('Error al eliminar el Proyecto');
            })
            .finally(() => {
                this.getProjectData();
            });
    }
}
